import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Nombre de tu repositorio
  server: {
    port: 3000,
    host: true, // Permite conexiones desde otros dispositivos
    open: true, // Abre el navegador automáticamente
  },
});
