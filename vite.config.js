import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ye change karke '/' ya './' rakho agar assets load nahi ho rahe
});
