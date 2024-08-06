/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: { primary: '#011627', secondary: '#01080E' },
				border: { primary: '#1E2D3D', active: '#FEA55F' },
				text: {
					primary: '#607B96',
					secondary: '#E5E9F0',
					active: '#FFFFFF'
				}
			}
		}
	},
	plugins: []
};
