import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./config/schema.ts",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://http%3A%2F%2Flocalhost%3A5173%2F_owner:deATDG9xM8fz@ep-twilight-dream-a5ww5hym.us-east-2.aws.neon.tech/carHUBS?sslmode=require'
  },
  verbose: true,
  strict: true,
})




