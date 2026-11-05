import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// CSS Modules работают из коробки: любой файл *.module.css
// base — сайт на GitHub Pages открывается из подпапки /Botlegger_project/
export default defineConfig({
  base: '/Botlegger_project/',
  plugins: [react()],
  server: { port: 5174 },
});
