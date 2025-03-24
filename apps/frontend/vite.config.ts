import { type PluginOption, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'process.env': env,
    },
    base: env.VITE_BASE_URL || '/',
    cacheDir: 'node_modules/.cache/.vite',
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    alias: {
      '@': '/src',
    },
    server: {
      port: mode === 'development' ? 4000 : 8080,
      strictPort: false,
      proxy: {
        '/api': {
          target: `http://localhost:3000`,
          changeOrigin: true,
        },
      },
      compress: true,
      cors: true,
      hmr: {
        overlay: true
      }
    },
    build: {
      outDir: '../../dist/frontend',
      sourcemap: true,
      manifest: true,
      minify: 'esbuild',
      // cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        input: {
          main: 'index.html',
          // '404': '404.html',
        },
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
          }
        },
      },
      emptyOutDir: true
    },
    html: {
      cspNonce: 'VITE_NONCE',
    },
    css: {
      // transformer: 'lightningcss',
      devSourcemaps: true,
    },
    appType: 'spa',
    plugins: [
      react(),
    ] as PluginOption[],
  }
})
