import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            components: path.resolve(__dirname, "./src/components"),
            shared: path.resolve(__dirname, "./src/shared"),
            entities: path.resolve(__dirname, "./src/entities"),
            features: path.resolve(__dirname, "./src/features"),
            widgets: path.resolve(__dirname, "./src/widgets"),
            pages: path.resolve(__dirname, "./src/pages"),
        },
    },
    plugins: [react()],
});
