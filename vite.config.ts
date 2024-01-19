import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/fylo-landing-page-with-two-column-layout',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
