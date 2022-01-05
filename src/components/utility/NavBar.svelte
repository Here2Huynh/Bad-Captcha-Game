<script>
	/**
	 * NOTE: fancy tailwindcss borrowed from
	 * https://devdojo.com/tailwindcss/buttons#_
	 */
	let tabs = ['/', '/levels'];

	const assignNames = (tab) => {
		if (tab == '/') {
			return 'Home';
		} else {
			return 'Levels';
		}
	};
</script>

<svelte:head>
	<title>Bad Captcha Game</title>
</svelte:head>

<nav class="m-4 flex justify-center w-full">
	<ul class="flex flex-wrap">
		{#each tabs as tab, idx (idx)}
			<li class="mr-2">
				<a href={tab} class="relative inline-block text-lg group">
					<span
						class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white"
					>
						<span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50" />
						<span
							class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"
						/>
						<span class="relative">{assignNames(tab)}</span>
					</span>
					<span
						class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
						data-rounded="rounded-lg"
					/>
				</a>
			</li>
		{/each}
	</ul>
</nav>
