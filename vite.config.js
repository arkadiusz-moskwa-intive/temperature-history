import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
})
