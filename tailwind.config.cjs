module.exports = {
	mode: 'jit',
	// purge: ['./src/**/*.svelte']
	purge: {
		content: ['./src/**/*.svelte'],
		// These options are passed through directly to PurgeCSS
		options: {
			safelist: [
				'bg-gray-400',
				'fill-gray-400',
				'text-white',
				'opacity-0',
				'opacity-100',
				'bottom-100',
				'top-100',
				'right-100',
				'left-100',
				'mb-2',
				'mt-2',
				'mr-2',
				'ml-2',
				'w-full',
				'ml-2',
				'mr-2',
				'h-full',
				'w-2',
				'mt-2',
				'mb-2',
				'left-0',
				'right-0',
				'top-0',
				'bottom-0'
			]
		}
	}
};
