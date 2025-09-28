import { defineConfig } from "astro/config";
import icon from "astro-icon";

// ESM import が必要
import heroicons from "@iconify-json/heroicons/icons.json";
import mdi from "@iconify-json/mdi/icons.json";

export default defineConfig({
  integrations: [
    icon({
      collections: {
        heroicons,
        mdi,
      },
    }),
  ],
});
