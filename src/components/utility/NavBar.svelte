<script>
	import { page } from '$app/stores';

	let tabs = ['/', '/levels'];
	let activeTab = $page.path;

	const handleTabChange = (tab) => {
		if ($page.path != tab) {
			activeTab = tab;
		}
	};

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
				<a
					href={tab}
					class="inline-block py-3 px-4 text-sm font-medium text-center rounded-lg hover:text-gray-900 hover:bg-gray-100"
					class:bg-purple-400={tab === activeTab}
					class:text-white={tab === activeTab}
					class:text-black={tab != activeTab}
					class:bg-white={tab === activeTab}
					on:click={() => handleTabChange(tab)}>{assignNames(tab)}</a
				>
			</li>
		{/each}
	</ul>
</nav>
