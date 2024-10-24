import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'node', //jsdom for browser-like environment
    include: ['tests/**/*.test.ts'], 
    coverage: {
      reporter: ['text', 'json', 'html'], 
    },
  },
});