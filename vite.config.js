import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://aura.home-cloud.fun:1050',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ''),
  //     }
  //   }
  // }
})
