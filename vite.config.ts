import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";

// Utilisation de __dirname pour la compatibilité Node standard
const projectRoot = process.cwd();

export default defineConfig(async () => {
  // Préparation des plugins conditionnels pour Replit
  const replitPlugins = [];
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    const { devBanner } = await import("@replit/vite-plugin-dev-banner");
    replitPlugins.push(cartographer(), devBanner());
  }

  return {
    plugins: [
      react(),
      runtimeErrorOverlay(),
      tailwindcss(),
      metaImagesPlugin(),
      ...replitPlugins,
    ],
    resolve: {
      alias: {
        "@": path.resolve(projectRoot, "client", "src"),
        "@shared": path.resolve(projectRoot, "shared"),
        "@assets": path.resolve(projectRoot, "attached_assets"),
      },
    },
    root: path.resolve(projectRoot, "client"),
    build: {
      // Vercel cherchera les fichiers ici
      outDir: path.resolve(projectRoot, "dist/public"),
      emptyOutDir: true,
      reportCompressedSize: false,
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
