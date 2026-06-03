import {
  defineConfig
} from 'vite'
import react from '@vitejs/plugin-react'
import {
  VitePWA
} from 'vite-plugin-pwa'


// https://vite.dev/config/
export default defineConfig( {
  plugins: [
    react(),
    VitePWA( {
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"]
      },
      manifest: {
        name: 'air1app1',
        short_name: 'air1app1',
        description: 'My downloadable React app',
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [{
          src: '/logo192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
          {
            src: '/logo512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }]
      }
    })
  ],
})