import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto debe coincidir con el nombre de tu repositorio en GitHub
  // Si tu URL es https://jeferssonjimenezcardona.github.io/PRUEBA1/
  // entonces la base debe ser '/PRUEBA1/'
  base: '/PRUEBA1/', 
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});