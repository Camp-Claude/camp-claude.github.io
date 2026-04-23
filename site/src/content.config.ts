// Content collections — read markdown from the sibling content/ directory.
// Astro 5 glob loader lets us source from outside src/ without duplicating files.

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  module: z.number().optional(),            // 1..N ordering within section
  section: z.enum(['teach', 'reference']).default('teach'),
  tier: z.enum(['free', 'email', 'paid']).default('free'),
  readTime: z.string().optional(),           // e.g. "12 min read"
  canonicalSlug: z.string().optional(),      // override default slug if needed
  draft: z.boolean().default(false),
  updated: z.string().optional(),            // ISO date string
});

const teach = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../content/teach' }),
  schema: sharedSchema,
});

const reference = defineCollection({
  loader: glob({ pattern: '**/*.md', base: '../content/reference' }),
  schema: sharedSchema,
});

export const collections = { teach, reference };
