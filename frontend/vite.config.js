import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    // host: "192.168.1.135",
    port: 5173,
  },
  plugins: [react()],
});
