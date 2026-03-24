import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const config = defineConfig({
  ssr: {
    external: ['@takumi-rs/image-response','@takumi-rs/core'],
  },
  optimizeDeps: {
    include: ['@takumi-rs/image-response','@takumi-rs/core'],
  },
  plugins: [
    devtools(),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    nitro({
      traceDeps: ['@takumi-rs/core'],
    }),
    viteReact(),
  ],
})

export default config
