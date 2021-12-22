<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import Prompt from '../components/Prompt.svelte';
	import InputUI from '../components/InputUI.svelte';
	import Letters from '../stores/lettersStore';
	import Numbers from '../stores/numbersStore';
	import InputStore from '../stores/inputStore';
	export let idx;

	let promptCode;
	const promptCodeLength = 5;

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

	const combo = $Letters + $Numbers;
	const generatePrompt = (length, mode = 'combo') => {
		let result = '';
		let characters;

		switch (mode) {
			case 'letters':
				characters = $Letters;
				break;
			case 'numbers':
				characters = $Numbers;
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

	onMount(() => (promptCode = generatePrompt(promptCodeLength, 'letters')));

	const handleLevelRefresh = () => {
		promptCode = undefined;
		// reset prompt
		setTimeout(() => {
			promptCode = generatePrompt(5, 'letters');
		}, 500);

		// reset input ui
		InputStore.update((currentInputs) => {
			let copyInputs = [...currentInputs];
			copyInputs = copyInputs.map((i) => {
				i.selected = false;
				i.value = '';
				return i;
			});

			return copyInputs;
		});

		// TODO: refresh input values
		// TODO: add nice transition on refresh
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<h1
	class="m-10 text-center text-2xl underline underline-offset-4 cursor-crosshair"
	on:click={handleLevelRefresh}
>
	Level {idx}
</h1>
<Prompt {promptCode} />
<InputUI {promptCodeLength} />

{#if promptCode}
	<div transition:fade><slot /></div>
{/if}
