import type { Translation } from '..'

const translations = {
    en: {
        'contactForm.name': 'Name',
        'contactForm.messagePlaceholder':
            'Hi Mathis, I have an idea for a project...',
        'contactForm.send': 'Send',
        'contactForm.toastPending': 'Sending message...',
        'contactForm.toastSuccess': 'Message sent successfully!',
        'contactForm.toastError':
            'An error occurred while sending the message.',
        'contactForm.nameTooShort': 'The name must contain at least 2 characters',
        'contactForm.nameTooLong': 'The name must contain a maximum of 50 characters',
        'contactForm.emailInvalid': 'Invalid email address',
        'contactForm.messageTooShort': 'The message must contain at least 10 characters',
        'contactForm.messageTooLong': 'The message must contain a maximum of 1000 characters',
    },
    fr: {
        'contactForm.name': 'Nom',
        'contactForm.messagePlaceholder':
            "Salut Mathis, j'ai une idée de projet...",
        'contactForm.send': 'Envoyer',
        'contactForm.toastPending': 'Envoi du message...',
        'contactForm.toastSuccess': 'Message envoyé !',
        'contactForm.toastError': 'Une erreur est survenue',
        'contactForm.nameTooShort': 'Le nom doit contenir au minimum 2 caractères',
        'contactForm.nameTooLong': 'Le nom doit contenir au maximum 50 caractères',
        'contactForm.emailInvalid': "L'email n'est pas valide",
        'contactForm.messageTooShort': 'Le message doit contenir au minimum 10 caractères',
        'contactForm.messageTooLong': 'Le message doit contenir au maximum 1000 caractères',
    },
} satisfies Translation

export default translations
