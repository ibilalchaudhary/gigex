import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import html from "@rollup/plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    html({
      inject: {
        injectTo: "head",
        tag: '<link rel="icon" type="image/png" href="/client/public/favicon.ico" />',
      },
    }),
  ],
});
