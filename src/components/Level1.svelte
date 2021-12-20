<script>
	import { onMount } from 'svelte';

	export let idx;
	let promptCode;

	// TODO: turn this into a level page template

	let keyPresses = [];

	const ctrlKeys = ['MetaLeft', 'MetaRight'];
	const copyAndPastekeys = ['KeyC', 'KeyV'];

	const handleKeyDown = (e) => {
		keyPresses.push(e.code);

		if (
			keyPresses.length == 2 &&
			ctrlKeys.includes(keyPresses[0]) &&
			copyAndPastekeys.includes(keyPresses[1])
		) {
			// TODO: upgrade this to a modal
			alert(`Hey, why you are trying to cheat? ha?`);
			keyPresses = [];
		}
	};

	// TODO: refactor to store
	const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbers = '0123456789';
	const combo = letters + numbers;
	const generatePrompt = (length, mode = 'combo') => {
		let result = '';
		let characters;

		switch (mode) {
			case 'letters':
				characters = letters;
				break;
			case 'numbers':
				characters = numbers;
				break;
			case 'combo':
				characters = combo;
				break;
			default:
				characters = combo;
				break;
		}

		const charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}

		return result;
	};

	onMount(() => {
		return (promptCode = generatePrompt(5, 'letters'));
	});

	const handleLevelRefresh = () => {
		promptCode = undefined;
		setTimeout(() => {
			promptCode = generatePrompt(5, 'letters');
		}, 500);

		// TODO: refresh input values
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<h1 class="m-10 text-center text-2xl underline underline-offset-4" on:click={handleLevelRefresh}>
	Level {idx}
</h1>
<div class="m-5 flex justify-center">
	<div class="box-content p-4 border-4 rounded-lg">
		<div>
			{#if promptCode}
				<h1 class="text-5xl hover:blur-2xl select-none">{promptCode}</h1>
			{:else}
				<div class="text-5xl text-center w-32">⌛</div>
			{/if}
		</div>
	</div>
</div>
