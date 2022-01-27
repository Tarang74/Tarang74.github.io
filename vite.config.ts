import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import sassDts from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components')
        }
    }
});
