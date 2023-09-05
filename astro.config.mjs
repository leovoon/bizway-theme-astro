import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import Compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), Compress()],
});
