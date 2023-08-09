/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			bellefair: ['Bellefair', 'serif'],
			barlow: ['Barlow Condensed', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'mobile': 'url(/assets/home/background-home-mobile.jpg)',
				'tablet': "url('/assets/home/background-home-tablet.jpg')",
				'desktop': "url('/assets/home/background-home-desktop.jpg')"
			  }
		},
	},
	plugins: [],
}
