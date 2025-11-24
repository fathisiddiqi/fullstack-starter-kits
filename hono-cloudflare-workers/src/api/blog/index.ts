import { successResponse } from "@/lib/response";
import { Blog } from "@/db/schema";
import { blogResponseSchema, idSchema } from "./schema";
import z from "zod";
import { validator } from "hono/validator";
import { NotFoundError } from "@/lib/error";
import { appFactory } from "@/lib/app-factory";

const blogAPI = appFactory.createApp();

blogAPI.get(
  "/",
  validator("param", (value, c) => {
    const parsed = idSchema.safeParse(value);
    if (!parsed.success) {
      throw parsed.error;
    }

    return parsed.data;
  }),
  async (c) => {
    const id = c.req.valid("param").id;
    const blog = await c.get("db").query.blog.findFirst({
      where: (blog, { eq }) => eq(blog.uuid, id),
    });
    if (!blog) {
      throw new NotFoundError("Blog not found");
    }

    return successResponse(c, mapBlogToResponse(blog));
  }
);

const mapBlogToResponse = (blog: Blog): z.infer<typeof blogResponseSchema> => {
  return {
    id: blog.id,
    uuid: blog.uuid,
    title: blog.title,
    keywords: blog.keywords,
    content: blog.content || "",
    status: blog.status,
    createdAt: blog.createdAt,
    updatedAt: blog.updatedAt,
  };
};

export default blogAPI;
