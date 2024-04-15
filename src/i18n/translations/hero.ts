import type { Translation } from '..'

const translations = {
    en: {
        'hero.hi': "Hi, I'm",
        'hero.description': 'Fullstack developer using the latest technologies.',
        'hero.status.available': 'Available for work',
        'hero.status.open': 'Open for opportunities',
        'hero.status.busy': 'Busy at the moment',
    },
    fr: {
        'hero.hi': "Salut, moi c'est",
        'hero.description': 'Développeur Fullstack utilisant les dernières technologies.',
        'hero.status.available': 'Actuellement disponible',
        'hero.status.open': 'Ouvert aux opportunités',
        'hero.status.busy': 'Actuellement occupé',
    },
} satisfies Translation

export default translations
