/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_PUBLIC_FOLDER: string
  readonly VITE_OUTDIR_FOLDER: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
