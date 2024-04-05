/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			bellefair: ['Bellefair', 'serif'],
			barlow: ['Barlow Condensed', 'sans-serif'],
			bar: ['Barlow', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				'mobile': "url('/assets/home/background-home-mobile.jpg')",
				'tablet': "url('/assets/home/background-home-tablet.jpg')",
				'desktop': "url('/assets/home/background-home-desktop.jpg')",
				'crew-mobile': 'url(/assets/crew/background-crew-mobile.jpg)',
				'crew-tablet': 'url(/assets/crew/background-crew-tablet.jpg)',
				'crew-desktop': 'url(/assets/crew/background-crew-desktop.jpg)',
				'destination-mobile': 'url(/assets/destination/background-destination-mobile.jpg)',
				'destination-tablet': 'url(/assets/destination/background-destination-tablet.jpg)',
				'destination-desktop': 'url(/assets/destination/background-destination-desktop.jpg)',
				'technology-mobile': 'url(/assets/technology/background-technology-mobile.jpg)',
				'technology-tablet': 'url(/assets/technology/background-technology-tablet.jpg)',
				'technology-desktop': 'url(/assets/technology/background-technology-desktop.jpg)',
			  }
		},
	},
	plugins: [],
}
