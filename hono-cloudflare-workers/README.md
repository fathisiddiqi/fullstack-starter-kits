# Discussion API

This is API for Mini Discussion, this API purpose for managing discussion threads and its replies

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

2. set env

```bash
JWT_SECRET=your preferable secret
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

2. run the migration

```bash
pnpm run db:migrate
```

## Deployment Setup

1. run deploy script

```bash
pnpm run deploy
```

2. set up .env for db migration

```bash
mv .env.example .env
```

3. setup the CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_DATABASE_ID, CLOUDFLARE_D1_TOKEN

- get CLOUDFLARE_ACCOUNT_ID from dashboard link of cloudflare for example: https://dash.cloudflare.com/account-id-xxxxxxxx
- get CLOUDFLARE_DATABASE_ID from d1 id
- get CLOUDFLARE_D1_TOKEN from https://dash.cloudflare.com/profile/api-tokens and set up for d1 READ and WRITE

4. run db migration

```bash
pnpm run db:deploy
```
