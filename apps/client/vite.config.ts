import { type PluginOption, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    server: {
      port: 4000,
      proxy: {
        '/api': {
          target: `http://localhost:3000`,
          changeOrigin: true,
        },
      },
    },
    base: env.VITE_BASE_URL || '/',
    cacheDir: 'node_modules/.cache/.vite',
    plugins: [react()] as PluginOption[],
  }
})
