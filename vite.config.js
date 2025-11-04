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
    host: '0.0.0.0', // Dostęp z sieci lokalnej (telefon w WiFi)
    open: true,
    // Pokazuj lokalny IP w konsoli
    strictPort: false
  },
  // Base path for production
  base: '/'
})

