import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts migrated from WordPress. Each file is HTML body + JSON frontmatter.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    modified: z.coerce.date().optional(),
    author: z.string().default('Kite Media'),
    categories: z.array(z.string()).default([]),
    excerpt: z.string().default(''),
    featuredImage: z.string().default(''),
    featuredAlt: z.string().default(''),
    seoTitle: z.string().default(''),
    description: z.string().default(''),
  }),
});

// Portfolio projects ("Our Work").
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    heading: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    featuredImage: z.string().default(''),
    site: z.string().default(''),
    gallery: z.array(z.string()).default([]),
    seoTitle: z.string().default(''),
    description: z.string().default(''),
  }),
});

export const collections = { blog, projects };
