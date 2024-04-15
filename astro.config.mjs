import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import robots from 'astro-robots'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), react(), sitemap(), robots()],
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },
    site: 'https://mathisengels.fr',
})
