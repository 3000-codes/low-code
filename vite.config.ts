import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), UnoCSS({
    shortcuts: [],
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        extraProperties: {
          display: 'inline-block',
          'vertical-align': 'middle'
        }
      })
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
