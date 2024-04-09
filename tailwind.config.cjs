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
				'mobile': "url('/space-tourism-website/assets/home/background-home-mobile.jpg')",
				'tablet': "url('/space-tourism-website/assets/home/background-home-tablet.jpg')",
				'desktop': "url('/space-tourism-website/assets/home/background-home-desktop.jpg')",
				'crew-mobile': 'url(/space-tourism-website/assets/crew/background-crew-mobile.jpg)',
				'crew-tablet': 'url(/space-tourism-website/assets/crew/background-crew-tablet.jpg)',
				'crew-desktop': 'url(/space-tourism-website/assets/crew/background-crew-desktop.jpg)',
				'destination-mobile': 'url(/space-tourism-website/assets/destination/background-destination-mobile.jpg)',
				'destination-tablet': 'url(/space-tourism-website/assets/destination/background-destination-tablet.jpg)',
				'destination-desktop': 'url(/space-tourism-website/assets/destination/background-destination-desktop.jpg)',
				'technology-mobile': 'url(/space-tourism-website/assets/technology/background-technology-mobile.jpg)',
				'technology-tablet': 'url(/space-tourism-website/assets/technology/background-technology-tablet.jpg)',
				'technology-desktop': 'url(/space-tourism-website/assets/technology/background-technology-desktop.jpg)',
			  }
		},
	},
	plugins: [],
}
