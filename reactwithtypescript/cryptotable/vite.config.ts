import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.frontendexpert.io", // Replace with your API endpoint
        changeOrigin: true,
      },
    },
  },
});
