import { DrizzleD1Database } from "drizzle-orm/d1";
import { blog } from "../db/schema";
import * as dbSchema from "../db/schema";
import { and, eq, isNull } from "drizzle-orm";

export const getById = async (
  db: DrizzleD1Database<typeof dbSchema>,
  id: string
) => {
  const result = await db.query.blog.findFirst({
    where: and(eq(blog.uuid, id), isNull(blog.deletedAt)),
  });

  return result;
};
