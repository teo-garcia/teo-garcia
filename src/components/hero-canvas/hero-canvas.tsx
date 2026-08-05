import { useEffect, useRef } from 'react'

const VERTEX_SHADER = `
  attribute vec2 p;
  void main() { gl_Position = vec4(p, 0.0, 1.0); }
`

/*
 * A domain-warped fractal-noise field: noise sampled through noise, twice.
 * The result is folded into bands of light, then attenuated across a
 * horizontal corridor so the headline always sits on quiet pixels.
 */
const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 u_res;
  uniform float u_time;
  uniform vec2 u_mouse;
  uniform float u_dark;
  uniform float u_intensity;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.02;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res.xy;
    vec2 st = (gl_FragCoord.xy - 0.5 * u_res.xy) / u_res.y;

    vec2 m = (u_mouse - 0.5) * 0.7;
    float t = u_time * 0.032;

    vec2 q = vec2(fbm(st * 1.5 + t), fbm(st * 1.5 + vec2(3.2, 1.4) - t));
    vec2 r = vec2(
      fbm(st * 1.9 + 3.2 * q + vec2(1.7, 9.2) + t * 1.3 + m),
      fbm(st * 1.9 + 3.2 * q + vec2(8.3, 2.8) - t * 1.0 - m)
    );
    float f = fbm(st * 1.7 + 3.6 * r);

    float bands = smoothstep(0.34, 0.88, f);
    float veil = pow(clamp(1.0 - length(st * vec2(0.62, 0.95)), 0.0, 1.0), 2.0);

    // Spotlight from above, nudged by the cursor.
    float spot = smoothstep(
      1.1, 0.0,
      length((uv - vec2(0.5 + m.x * 0.25, 1.16)) * vec2(1.0, 1.85))
    );

    // Quiet corridor through the middle of the frame: the headline lives here.
    float corridor = 1.0 - 0.62 * exp(-pow((uv.y - 0.5) * 3.1, 2.0));

    float lum = (bands * veil * 0.5 + spot * 0.26 + f * 0.05) * corridor;
    lum *= u_intensity;

    // Light mode gets a gamma lift so the field is clearly visible, but the
    // amplitude is hard-capped: the darkest light-mode pixel stays a mid grey
    // so translucent chrome on top never loses its contrast.
    float darkLum = lum * 1.02;
    float lightLum = pow(clamp(lum * 1.35, 0.0, 1.0), 0.9) * 0.5;

    vec3 dark = vec3(0.02) + vec3(1.0) * darkLum;
    vec3 light = vec3(0.985) - vec3(1.0) * lightLum;
    vec3 col = mix(light, dark, u_dark);

    // Ordered-ish dither: without it, near-black gradients band badly.
    float d = (hash(gl_FragCoord.xy) - 0.5) / 255.0;
    gl_FragColor = vec4(col + d, 1.0);
  }
`

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)

  if (!shader) {
    return null
  }

  gl.shaderSource(shader, source)
  gl.compileShader(shader)

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader)
    return null
  }

  return shader
}

export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) {
      return
    }

    const gl =
      canvas.getContext('webgl', {
        alpha: false,
        antialias: false,
        powerPreference: 'low-power',
      }) ?? null

    // No WebGL: the CSS gradient layers underneath carry the hero on their own.
    if (!gl) {
      return
    }

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)

    if (!vertex || !fragment) {
      return
    }

    const program = gl.createProgram()

    if (!program) {
      return
    }

    gl.attachShader(program, vertex)
    gl.attachShader(program, fragment)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      return
    }

    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    )

    const position = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'u_res')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')
    const uDark = gl.getUniformLocation(program, 'u_dark')
    const uIntensity = gl.getUniformLocation(program, 'u_intensity')

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const pointer = { x: 0.5, y: 0.5 }
    const target = { x: 0.5, y: 0.5 }

    let frame = 0
    let visible = true
    let intensity = 0
    const start = performance.now()

    function resize() {
      if (!canvas || !gl) {
        return
      }

      // Half-resolution is plenty for a soft noise field and keeps the GPU cool.
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.6
      canvas.width = Math.max(1, Math.floor(canvas.clientWidth * scale))
      canvas.height = Math.max(1, Math.floor(canvas.clientHeight * scale))
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    function handlePointer(event: PointerEvent) {
      target.x = event.clientX / window.innerWidth
      target.y = 1 - event.clientY / window.innerHeight
    }

    function draw(animated: boolean) {
      if (!canvas || !gl) {
        return
      }

      pointer.x += (target.x - pointer.x) * 0.04
      pointer.y += (target.y - pointer.y) * 0.04
      // Fade the field in rather than popping it on at full strength.
      intensity += (1 - intensity) * 0.02

      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform1f(uTime, animated ? (performance.now() - start) / 1000 : 12)
      gl.uniform2f(uMouse, pointer.x, pointer.y)
      gl.uniform1f(
        uDark,
        document.documentElement.classList.contains('dark') ? 1 : 0
      )
      gl.uniform1f(uIntensity, animated ? intensity : 1)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }

    function loop() {
      if (visible) {
        draw(true)
      }
      frame = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    // Pause entirely once the hero scrolls away — no GPU work off-screen.
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries.some((entry) => entry.isIntersecting)
      },
      { threshold: 0 }
    )
    observer.observe(canvas)

    // Repaint on theme change so the field flips with the palette.
    const themeObserver = new MutationObserver(() =>
      draw(!reduceMotion.matches)
    )
    themeObserver.observe(document.documentElement, {
      attributeFilter: ['class'],
      attributes: true,
    })

    if (reduceMotion.matches) {
      draw(false)
    } else {
      window.addEventListener('pointermove', handlePointer, { passive: true })
      loop()
    }

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      themeObserver.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointer)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return (
    <canvas
      className='pointer-events-none absolute inset-0 z-0 size-full'
      ref={canvasRef}
      aria-hidden='true'
    />
  )
}
