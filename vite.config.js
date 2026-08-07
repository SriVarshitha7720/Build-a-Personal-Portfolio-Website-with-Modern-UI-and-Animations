import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Build-a-Personal-Portfolio-Website-with-Modern-UI-and-Animations/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
