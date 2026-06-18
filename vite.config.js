import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-wealth-global-hub-3/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
