import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { name as pkgName } from './package.json'

export default defineConfig({
	plugins: [dts({ rollupTypes: true })],
	build: {
		minify: false,
		lib: {
			entry: 'src/index.ts',
			formats: ['cjs', 'es', 'iife'],
			name: pkgName,
		},
	},
})
