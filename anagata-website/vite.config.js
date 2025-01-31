import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: "192.168.1.104",
    port: 8080,
    origin: "http://localhost:8080",
  },
  build: {
    chunkSizeWarningLimit: 2000,
  },
});
