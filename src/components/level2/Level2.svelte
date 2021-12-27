<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';

	import Letters from '../../stores/lettersStore';
	import CharactersStore from '../../stores/charactersStores';
	import { CheatingModalStore } from '../../stores/cheatingStore.js';
	import InputStore from '../../stores/inputStore';
	import PromptCodeStore from '../../stores/promptStore';

	export let idx;

	// function binded from child
	let openLoser;
	let openWinner;
	let levelRefresh;

	onMount(() => {
		CharactersStore.update((currentCharacters) => {
			let copyCharacters = [...currentCharacters];
			let characters = [];

			for (let character of $Letters) {
				characters.push({
					value: getRandomInt(10, 99),
					letter: character
				});
			}

			characters.sort(() => Math.random() - 0.5);
			copyCharacters = characters;

			return copyCharacters;
		});
	});

	const checkWinCondition = (e) => {
		const idx = $InputStore.findIndex((input) => input.selected);

		if ($InputStore[idx].value.length && !$InputStore[idx].disabled) {
			InputStore.update((currentInputs) => {
				const copiedInputs = [...currentInputs];
				const correct = $InputStore[idx].value === $PromptCodeStore[idx];
				copiedInputs[idx].disabled = !correct;
				copiedInputs[idx].correct = correct;
				copiedInputs[idx].wrong = !correct;

				return copiedInputs;
			});
		}

		const currentInput = $InputStore.reduce((prev, curr) => (prev += curr.value), '');

		if (currentInput.length === $PromptCodeStore.length) {
			if (currentInput === $PromptCodeStore) {
				console.log('you show tenacity yung 1');
				levelRefresh();
				openWinner();
			} else {
				console.log('you lost ha~ ha~');
				levelRefresh();
				openLoser();
			}
		}
	};
</script>

{#if $CharactersStore.length}
	<div in:fade={{ delay: 500 }}>
		<Modal show={$CheatingModalStore}>
			<BaseLevel
				{idx}
				bind:openLoserModal={openLoser}
				bind:openWinnerModal={openWinner}
				bind:handleLevelRefresh={levelRefresh}
			>
				<div class="grid grid-cols-6 grid-rows-5 gap-2 justify-items-center select-none m-4">
					{#each $CharactersStore as character, idx (idx)}
						<!-- <button>{character.letter}</button> -->
						<!-- Show tooltip on top -->
						<!-- <button
							data-tooltip-target="tooltip-top"
							data-tooltip-placement="top"
							type="button"
							class="mb-2 md:mb-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
							>Tooltip top</button
						>
						<div
							id="tooltip-top"
							role="tooltip"
							class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
						>
							Tooltip on top
							<div class="tooltip-arrow" data-popper-arrow />
						</div> -->
					{/each}
				</div>
			</BaseLevel>
		</Modal>;
	</div>
{/if}
