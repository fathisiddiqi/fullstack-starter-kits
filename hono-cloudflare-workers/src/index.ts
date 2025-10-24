import { Hono } from "hono";
import { requestId } from "hono/request-id";
import { cors } from "hono/cors";
import { HttpContext } from "./types";
import { dbMiddleware, loggerMiddleware } from "./middleware";
import { errorResponse } from "./response";
import blogAPI from "./blog";

const app = new Hono<HttpContext>();
app.use(cors());
app.use(requestId());
app.use(loggerMiddleware);
app.use(dbMiddleware);

app.get("/", (c) => {
  return c.text("Hello Blog API!");
});

const apiV1 = app.basePath("/api/v1");

apiV1.route("/blog", blogAPI);

app.onError((err, c) => {
  return errorResponse(c as any, err);
});

export default app;
