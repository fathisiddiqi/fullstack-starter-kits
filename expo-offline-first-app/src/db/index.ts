import { drizzle } from "drizzle-orm/op-sqlite";
import * as schema from "./schema/index";
import { open } from "@op-engineering/op-sqlite";

const opsqliteDb = open({
  name: "vulus",
});

const db = drizzle(opsqliteDb, {
  schema,
});

export { db };
