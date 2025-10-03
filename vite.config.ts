import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'Sameer Yadav — Portfolio',
        short_name: 'Sameer Portfolio',
        description: 'Projects, case studies, resume, and contact.',
        theme_color: '#212A31',
        background_color: '#212A31',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: '/icons/maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          // Cache pages & API responses with a stale-while-revalidate strategy
          {
            urlPattern: ({ request }) => request.mode === 'navigate',
            handler: 'StaleWhileRevalidate',
          },
          {
            urlPattern: /^https:\/\/api\.github\.com\/users\/.*\/repos/,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'github-api', expiration: { maxEntries: 20, maxAgeSeconds: 60 * 30 } }
          }
        ]
      }
    })
  ]
})
