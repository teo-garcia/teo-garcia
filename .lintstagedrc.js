export default {
  '**/*.{js,jsx,ts,tsx,astro}': ['prettier --write', 'eslint --fix'],
  '**/*.{json,md,yml,yaml}': ['prettier --write'],
}
