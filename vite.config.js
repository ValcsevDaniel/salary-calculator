import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/<REPO>/', // Replace '<REPO>' with your repository name
  plugins: [react()]
});
