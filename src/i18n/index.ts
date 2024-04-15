import translations from './translations'

export enum Languages {
    English = 'en',
    French = 'fr',
}

export type Translation = {
    [K in Languages]: Record<string, string>
}

export const useTranslations = (lang: Languages = Languages.English) => {
    return function t(key: keyof (typeof translations)[typeof lang]) {
        return translations[lang][key]
    }
}
