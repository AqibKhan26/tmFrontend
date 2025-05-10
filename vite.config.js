import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths'
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths(), nodePolyfills()],
  define: {
    global: 'globalThis', // ✅ Fix for "global is not defined"
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis', // 👈 this fixes the `global is not defined` error
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
});