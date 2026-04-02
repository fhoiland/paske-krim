import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://fhoiland.github.io",
  base: "/paske-krim",
  output: "static",
  vite: {
    plugins: [tailwindcss()]
  }
});
