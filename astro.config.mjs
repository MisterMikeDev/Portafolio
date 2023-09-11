import { defineConfig } from "astro/config";
import TailwindCSS from "@astrojs/tailwind";
import React from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [TailwindCSS(), React()]
});
