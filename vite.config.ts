import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import { manifestPwa } from "./config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifestPwa,
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*{html,css,js,svg,png,ico}"],
      },
    }),
  ],
});
