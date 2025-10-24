import { Context, Next } from "hono";
import { HttpContext } from "./types";
import pino from "pino";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./db/schema";

const pinoLogger = pino();

export const loggerMiddleware = async (c: Context<HttpContext>, next: Next) => {
  c.set("logger", pinoLogger.child({ requestId: c.var.requestId }));
  await next();
};

export const dbMiddleware = async (c: Context<HttpContext>, next: Next) => {
  const db = drizzle(c.env.DB, { schema: schema });
  c.set("db", db);

  await next();
};
