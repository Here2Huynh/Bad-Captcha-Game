<script>
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import { getContext } from 'svelte';

	import Prompt from '../components/InputUI/Prompt.svelte';
	import InputUI from '../components/InputUI/InputUI.svelte';
	import CheatingModal from '../components/utility/CheatingModal.svelte';
	import LoserModal from '../components/utility/LoserModal.svelte';
	import WinnerModal from '../components/utility/WinnerModal.svelte';

	import Letters from '../stores/lettersStore';
	import Numbers from '../stores/numbersStore';
	import InputStore from '../stores/inputStore';
	import PromptCodeStore from '../stores/promptStore';

	export let idx;
	export let promptMode = 'letters';

	let keyPresses = [];
	const promptCodeLength = 5;

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
				i.correct = null;
				i.wrong = null;
				i.disabled = false;
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
				copyPrompt = generatePrompt(promptCodeLength, promptMode);
			} else {
				copyPrompt = value;
			}

			return copyPrompt;
		});
	};

	const openLoserModal = () => {
		open(LoserModal, { message: 'AI DETECTED!!' });
	};

	const openWinnerModal = () => {
		open(WinnerModal, { message: 'A tenacious human detected!' });
	};

	export const checkWinCondition = (multi = false) => {
		if (multi) {
			InputStore.update((currentInputs) => {
				const copiedInputs = [...currentInputs];

				copiedInputs.map((input, idx) => {
					input.correct = null;
					input.wrong = null;
					input.disabled = false;

					const correct = input.value === $PromptCodeStore[idx];
					if (correct) {
						input.correct = correct;
						input.disabled = !correct;
					} else {
						input.wrong = !correct;
						input.disabled = !correct;
					}

					return input;
				});

				return copiedInputs;
			});
		} else {
			const liveIdx = $InputStore.findIndex((input) => input.selected);

			if (
				$InputStore[liveIdx] &&
				$InputStore[liveIdx].value.length &&
				!$InputStore[liveIdx].disabled
			) {
				InputStore.update((currentInputs) => {
					const copiedInputs = [...currentInputs];
					const correct = $InputStore[liveIdx].value === $PromptCodeStore[liveIdx];
					copiedInputs[liveIdx].disabled = !correct;
					copiedInputs[liveIdx].correct = correct;
					copiedInputs[liveIdx].wrong = !correct;

					return copiedInputs;
				});
			}

			const currentInput = $InputStore.reduce((prev, curr) => (prev += curr.value), '');

			if (currentInput.length === $PromptCodeStore.length) {
				if (currentInput === $PromptCodeStore) {
					console.log('you show tenacity yung 1');
					handleLevelRefresh();
					openWinnerModal();
				} else {
					console.log('you lost ha~ ha~');
					handleLevelRefresh();
					openLoserModal();
				}
			}
		}
	};

	onMount(() => {
		updatePromptStore(true);
	});

	onDestroy(() => {
		handleLevelRefresh();
	});
</script>

<svelte:window on:keydown={handleKeyDown} />

<h1
	class="m-10 text-center text-2xl underline underline-offset-4 cursor-crosshair"
	on:click={handleLevelRefresh}
>
	Level {idx}
</h1>

<Prompt />
<InputUI />

{#if $PromptCodeStore}
	<div transition:fade>
		<slot />
	</div>
{/if}
