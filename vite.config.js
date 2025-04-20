import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'your-repo-name' with your actual repo name (case-sensitive!)
export default defineConfig({
  base: '/lock-in-portal/', 
  plugins: [react()]
})
