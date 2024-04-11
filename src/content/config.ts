import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
  type: 'data',
  schema: ({ image }) => z.object({
    image: image(),
    title: z.string(),
    description: z.string(),
    link: z.string().optional(),
    type: z.string(),
    tags: z.array(z.string()),
    date: z.string(),
    displayOnHomepage: z.boolean().optional()
  }),
});

export const collections = {
  'project': projectCollection,
};