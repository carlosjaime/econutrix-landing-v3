import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

export default defineConfig({
    srcDir: "./app",
    adapter: node({
        mode: "standalone"
    }),
    server: {
        port: 3000,
    },
    vite: {
        plugins: [tailwindcss()]
    }
})