import aboutMe from './aboutMe'
import contact from './contact'
import contactForm from './contactForm'
import footer from './footer'
import hero from './hero'
import navbar from './navbar'
import projects from './projects'

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
