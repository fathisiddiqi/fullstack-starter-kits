import pino from "pino";
import { drizzle } from "drizzle-orm/d1";
import * as schema from "@/db/schema";
import { appFactory } from "@/lib/app-factory";

const pinoLogger = pino();

export const loggerMiddleware = appFactory.createMiddleware(async (c, next) => {
  c.set("logger", pinoLogger.child({ requestId: c.var.requestId }));
  await next();
});

export const dbMiddleware = appFactory.createMiddleware(async (c, next) => {
  const db = drizzle(c.env.DB, { schema: schema });
  c.set("db", db);

  await next();
});
