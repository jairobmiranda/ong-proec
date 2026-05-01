import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        doar: 'doar.html',
        patrocinio: 'patrocinio.html',
        transparencia: 'transparencia.html',
      },
    },
  },
})
