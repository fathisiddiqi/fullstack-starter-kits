import z from "zod";

export const blogResponseSchema = z.object({
  id: z.number(),
  uuid: z.string(),
  title: z.string(),
  keywords: z.array(z.string()),
  content: z.string(),
  status: z.string(),
  createdAt: z.number(),
  updatedAt: z.number(),
  deletedAt: z.number().optional(),
});

export const idSchema = z.object({
  id: z.uuidv4(),
});
