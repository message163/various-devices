import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'variousDevices',
            fileName: (format) => `various-devices.${format}.js`,
            formats: ['es', 'cjs', 'umd','iife'],
        },
        
    },
    plugins: [
        dts(),
    ]
})