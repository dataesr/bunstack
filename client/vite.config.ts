import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: path.resolve(__dirname, '../node_modules/.vite'),
  clearScreen: false,
  build: {
    outDir: path.resolve(__dirname, '../build/public'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, '../server/src'),
      '@': path.resolve(__dirname, './src'),
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
