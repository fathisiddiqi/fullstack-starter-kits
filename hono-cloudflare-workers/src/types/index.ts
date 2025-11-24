import { AnyD1Database, DrizzleD1Database } from "drizzle-orm/d1";
import { Logger } from "pino";
import * as schema from "@/db/schema";

export type Bindings = {
  DB: AnyD1Database;
  APP_ENV: string;
  GOOGLE_GENAI_API_KEY: string;
};

export type Variables = {
  requestId: string;
  logger: Logger;
  db: DrizzleD1Database<typeof schema>;
};

export type HttpContext = {
  Bindings: Bindings;
  Variables: Variables;
};

export type Pagination = {
  offset: number;
  limit: number;
};
