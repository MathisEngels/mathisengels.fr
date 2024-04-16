import aboutMe from '@/i18n/translations/aboutMe'
import contact from '@/i18n/translations/contact'
import contactForm from '@/i18n/translations/contactForm'
import footer from '@/i18n/translations/footer'
import hero from '@/i18n/translations/hero'
import navbar from '@/i18n/translations/navbar'
import projects from '@/i18n/translations/projects'

const translations = {
    en: {
        ...navbar.en,
        ...hero.en,
        ...aboutMe.en,
        ...projects.en,
        ...contact.en,
        ...contactForm.en,
        ...footer.en,
    },
    fr: {
        ...navbar.fr,
        ...hero.fr,
        ...aboutMe.fr,
        ...projects.fr,
        ...contact.fr,
        ...contactForm.fr,
        ...footer.fr,
    },
}

export default translations
