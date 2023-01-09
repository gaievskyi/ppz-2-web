/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //       secure: false,
  //       target: 'https://alert-synapse-371215.lm.r.appspot.com'
  //     }
  //   }
  // },
  test: {
    globals: true
  }
})
