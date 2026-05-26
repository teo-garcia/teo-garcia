import shared from '@teo-garcia/prettier-config-shared'

export default {
  ...shared,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    ...(shared.overrides ?? []),
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
}
