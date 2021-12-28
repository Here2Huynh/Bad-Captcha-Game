<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';
	import Tooltip from '../../shared/Tooltip.svelte';

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
					show: false,
					letter: character,
					side: getRandomInt(0, 1)
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

	const handleLastRowStyling = (idx) => {
		switch (idx) {
			case $CharactersStore.length - 2:
				return 'col-start-3';
			case $CharactersStore.length - 1:
				return 'col-start-4';
		}
	};

	// const randomizeSides = () => {
	// 	getRandomInt(0, 1);
	// };
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
						<div
							class={`p-4 w-12 border rounded text-center relative ${handleLastRowStyling(idx)}`}
							on:mouseenter={() => (character.show = true)}
							on:mouseleave={() => (character.show = false)}
						>
							{character.letter}
							<Tooltip
								pointer="middle"
								position={character.side == 0 ? 'right' : 'left'}
								text={character.letter}
								w="48"
								show={character.show}
							/>
						</div>
					{/each}
				</div>
			</BaseLevel>
		</Modal>
	</div>
{/if}
