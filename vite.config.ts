import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? '/shuling-portfolio/' : '/'
  return {
    base,
    plugins: [
      {
        name: 'public-asset-base',
        enforce: 'pre',
        // Public URLs in JSX, data and template strings need the same base as CSS.
        transform(code, id) {
          if (!/\/src\/.*\.[jt]sx?$/.test(id.replaceAll('\\', '/').split('?')[0])) return
          return {
            code: code.replace(/(['"`])\/(images|videos|hero-hover|icon)\//g, `$1${base}$2/`),
            map: null,
          }
        },
      },
      react(),
      tailwindcss(),
    ],
  }
})
