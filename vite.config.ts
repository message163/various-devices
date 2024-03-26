import { defineConfig } from 'vite'



export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'variousDevices',
            fileName: (format) => `various-devices.${format}.js`,
            formats: ['es', 'cjs', 'umd','iife'],
        }
    }
})