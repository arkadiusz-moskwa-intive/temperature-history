import inject from '@rollup/plugin-inject';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
})
