import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ai-wealth-global-hub-3/',
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  }
})