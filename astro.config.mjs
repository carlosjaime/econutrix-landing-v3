import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    srcDir: "./app",
    server: {
        port: 3000,
    },
    vite: {
        plugins: [tailwindcss()]
    }
})