/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_API_URL: string;
  readonly VITE_MOVIE_IMAGE_URL: string;
  readonly VITE_VIDEO_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
