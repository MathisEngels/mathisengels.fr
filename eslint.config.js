import eslintPluginAstro from 'eslint-plugin-astro'
export default [
    ...eslintPluginAstro.configs['flat/recommended'],
    ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
    {
        rules: {},
    },
]
