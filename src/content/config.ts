import { defineCollection, z } from 'astro:content'

const projectCollection = defineCollection({
    type: 'data',
    schema: ({ image }) =>
        z.object({
            image: image(),
            title: z.string(),
            description: z.object({
                fr: z.string(),
                en: z.string(),
            }),
            link: z.string().optional(),
            type: z.object({
                fr: z.enum(['Freelance', 'Personnel', 'Open Source']),
                en: z.enum(['Freelance', 'Personal', 'Open Source']),
            }),
            tags: z.array(z.string()),
            date: z.string(),
            displayOnHomepage: z.boolean().optional(),
        }),
})

export const collections = {
    project: projectCollection,
}
