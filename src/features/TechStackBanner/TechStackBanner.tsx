import { IconType } from 'react-icons'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiAmazon,
  SiExpress,
  SiFastify,
  SiMysql,
  SiPostgresql,
  SiNestjs,
  SiDocker,
  SiStripe,
  SiWordpress,
  SiNextdotjs,
  SiVercel,
  SiNetlify,
  SiMongodb,
  SiPython,
  SiNodedotjs,
} from 'react-icons/si'

const techStack = [
  'HTML',
  'CSS',
  'JS',
  'TS',
  'NodeJS',
  'Python',
  'React',
  'Next',
  'Express',
  'Fastify',
  'Nest',
  'MYSQL',
  'Postgres',
  'MongoDB',
  'Docker',
  'Stripe',
  'WordPress',
  'AWS',
  'Vercel',
  'Netlify',
]

const TechStackIconsMap: Record<string, IconType> = {
  react: SiReact,
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
  ts: SiTypescript,
  aws: SiAmazon,
  express: SiExpress,
  fastify: SiFastify,
  mysql: SiMysql,
  postgres: SiPostgresql,
  nest: SiNestjs,
  docker: SiDocker,
  stripe: SiStripe,
  wordpress: SiWordpress,
  next: SiNextdotjs,
  vercel: SiVercel,
  netlify: SiNetlify,
  mongodb: SiMongodb,
  python: SiPython,
  nodejs: SiNodedotjs,
}

const TechStackBanner = () => {
  return (
    <section className="mx-auto flex w-11/12 flex-col md:w-9/12 lg:w-10/12 xl:w-9/12">
      <h2 className="py-12 text-5xl font-bold lg:py-24 ">Techstack:</h2>

      <ul className="mx-auto grid w-full grid-cols-2 items-center justify-center gap-y-12 md:grid-cols-3 md:gap-12 lg:grid-cols-4 xl:w-11/12 xl:grid-cols-5 xl:gap-16 ">
        {techStack.map((tool) => {
          const Icon = TechStackIconsMap[tool.toLowerCase()]
          return (
            <li
              className="flex flex-col items-center justify-center gap-y-4 lg:gap-8"
              key={tool}
            >
              <Icon className="h-24 w-24" />
              <h3 className="text-center text-3xl font-bold">{tool}</h3>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export { TechStackBanner }
