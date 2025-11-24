import { requestId } from "hono/request-id";
import { cors } from "hono/cors";
import { dbMiddleware, loggerMiddleware } from "@/api/middleware";
import { errorResponse } from "@/lib/response";
import blogAPI from "@/api/blog";
import { appFactory } from "./lib/app-factory";

const app = appFactory.createApp();
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
