import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  publicDir: 'static',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    // Ensure proper handling of static assets
    copyPublicDir: true
  },
  server: {
    port: 3000,
    open: true
  },
  // Base path for production
  base: '/'
})

