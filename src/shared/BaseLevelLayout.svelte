<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte';

	import Prompt from '../components/InputUI/Prompt.svelte';
	import InputUI from '../components/InputUI/InputUI.svelte';
	import CheatingModal from '../components/CheatingModal.svelte';

	import Letters from '../stores/lettersStore';
	import Numbers from '../stores/numbersStore';
	import InputStore from '../stores/inputStore';
	import PromptCodeStore from '../stores/promptStore';

	import Modal from './Modal.svelte';

	export let idx;
	export let lostCondition = false;

	let keyPresses = [];
	const promptCodeLength = 5;
	// $: wrong = false;
	// $: inputCheck = false;

	const { open } = getContext('simple-modal');

	const ctrlKeys = ['MetaLeft', 'MetaRight'];
	const copyAndPastekeys = ['KeyC', 'KeyV'];
	const handleKeyDown = (e) => {
		keyPresses.push(e.code);

		if (
			keyPresses.length == 2 &&
			ctrlKeys.includes(keyPresses[0]) &&
			copyAndPastekeys.includes(keyPresses[1])
		) {
			open(CheatingModal, { message: 'Hey, why you are trying to cheat? Haaa?' });

			keyPresses = [];
		} else if (keyPresses.length == 2) {
			keyPresses = [];
		}
	};

	const handleLevelRefresh = () => {
		updatePromptStore(false, undefined);
		// reset prompt
		setTimeout(() => {
			updatePromptStore(true);
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

	const updatePromptStore = (randomMode, value) => {
		PromptCodeStore.update((currentPrompt) => {
			let copyPrompt = currentPrompt;
			if (randomMode) {
				copyPrompt = generatePrompt(promptCodeLength, 'letters');
			} else {
				copyPrompt = value;
			}

			return copyPrompt;
		});
	};

	onMount(() => {
		updatePromptStore(true);
	});

	// $: if ($PromptCodeStore) {
	// 	inputCheck = $InputStore[idx].value === $PromptCodeStore[idx];

	// 	if ($InputStore[idx].value.length && !$InputStore[idx].disabled) {
	// 		wrong = !inputCheck;

	// 		InputStore.update((currentInputs) => {
	// 			const copiedInputs = [...currentInputs];
	// 			copiedInputs[idx].disabled = wrong;

	// 			return copiedInputs;
	// 		});

	// 		dispatch('input-entered');
	// 	}
	// }
</script>

<svelte:window on:keydown={handleKeyDown} />

<h1
	class="m-10 text-center text-2xl underline underline-offset-4 cursor-crosshair"
	on:click={handleLevelRefresh}
>
	Level {idx}
</h1>

<Modal show={lostCondition}>
	<Prompt />
	<InputUI {promptCodeLength} />
</Modal>

{#if $PromptCodeStore}
	<div transition:fade><slot /></div>
{/if}
