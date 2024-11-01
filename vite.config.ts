import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { optimizeCssModules } from "vite-plugin-optimize-css-modules";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true, // To include images from public directory
      include: /\.(jpg|jpeg|png)$/i, // Define which types of images to optimize
      webp: { quality: 85 },
      jpeg: { quality: 85 },
      png: { quality: 85 },
    }),
    optimizeCssModules(),
  ],
  build: {
    sourcemap: true,
  },
  base: "/omaralkadri_resume/"
})
