# Blog API

This is API for Blog, this API purpose for managing categories and scan the comments

## Prequisities

[Node >= 22](https://nodejs.org/)
[Hono >= 4.9](https://hono.dev/)
[Wrangler >= 4.4](https://developers.cloudflare.com/)
[Zod >= 4](https://zod.dev)
[Drizzle >= 0.44](https://orm.drizzle.team/)

## Installation

1. please activate your wrangler use this command and don't forget to populate the values

```bash
mv wrangler.toml.example wrangler.toml
```

2. install your project

```bash
pnpm install
```

3. run your project as dev

```bash
pnpm dev
```

## DB Generate & Migration

when planning to use db, you should prepare and running the migration under the hood

1. generate the schema (if you create new schema or update it)

```bash
pnpm run db:generate
```

example result `src/db/generated/0001_loremipsum.sql`

2. run the migration

```bash
pnpm run db:migrate --file=src/db/generated/0001_loremipsum.sql
```
