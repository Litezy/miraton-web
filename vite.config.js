import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Now properly installed
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),  
    tailwindcss(),
  ],
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, 
  },
  preview: {
    historyApiFallback: true,
  },
  assetsInclude: ['**/*.ttf'],
});