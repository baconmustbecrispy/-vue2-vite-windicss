import { splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue2';
import legacy from '@vitejs/plugin-legacy';
import WindiCSS from 'vite-plugin-windicss';
import path from 'path';

export default () => {
  return {
    server: {
      // host: true,
      // port: 8080,
    },
    plugins: [
      vue(),
      WindiCSS(),
      splitVendorChunkPlugin(),
      legacy({
        targets: ['defaults', 'not ie 11'],
      }),
    ],
    build: {
      // target: 'es2015',
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: {
            'element-ui': ['element-ui'],
          },
        },
      },
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.scss'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
};
