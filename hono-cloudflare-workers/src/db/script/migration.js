import { getPlatformProxy } from "wrangler";
import { drizzle } from "drizzle-orm/d1";
import { migrate } from "drizzle-orm/d1/migrator";

async function runMigrations() {
  try {
    const { env, dispose } = await getPlatformProxy({
      configPath: "./wrangler.toml",
    });

    const db = drizzle(env.DB);

    await migrate(db, { migrationsFolder: "./src/db/generated" });

    console.log("migrated db successfuly");

    await dispose();
  } catch (err) {
    console.log("migration error due to:", err);
    process.exit(1);
  }
}

runMigrations();
