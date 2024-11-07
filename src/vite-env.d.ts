// vite-env.d.ts

/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DRIZZLE_DATABASE_URL: string;
    readonly VITE_CLERK_PUBLISHABLE_KEY: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
