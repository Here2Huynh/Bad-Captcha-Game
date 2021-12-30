<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';
	import Tooltip from '../../shared/Tooltip.svelte';

	import Letters from '../../stores/lettersStore';
	import CharactersStore from '../../stores/charactersStore';
	import { CheatingModalStore } from '../../stores/cheatingStore';
	import InputStore from '../../stores/inputStore';

	export let idx;

	let fauxChars = [];

	// function binded from child
	let checkWinCondition;

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

				fauxChars.push(character);
			}

			characters.sort(() => Math.random() - 0.5);
			fauxChars.sort(() => Math.random() - 0.5);
			copyCharacters = characters;

			return copyCharacters;
		});
	});

	const handleLastRowStyling = (idx) => {
		switch (idx) {
			case $CharactersStore.length - 2:
				return 'col-start-3';
			case $CharactersStore.length - 1:
				return 'col-start-4';
		}
	};

	const handleClick = (idx) => {
		CharactersStore.update((currentCharacters) => {
			const copyCharacters = [...currentCharacters];

			InputStore.update((currentInputs) => {
				let copyInputs = [...currentInputs];
				const selectedInput = copyInputs.find((i) => i.selected);
				if (selectedInput && !selectedInput.disabled) {
					selectedInput.value = $CharactersStore[idx].letter;
				}

				return copyInputs;
			});

			fauxChars = [];
			for (let character of $Letters) {
				fauxChars.push(character);
			}

			// reset and shuffle the characters
			copyCharacters.map((c) => {
				c.show = false;
				c.side = getRandomInt(0, 1);

				return c;
			});

			copyCharacters.sort(() => Math.random() - 0.5);
			fauxChars.sort(() => Math.random() - 0.5);

			return copyCharacters;
		});

		checkWinCondition(false);
	};
</script>

{#if $CharactersStore.length}
	<div in:fade={{ delay: 500 }}>
		<Modal show={$CheatingModalStore}>
			<BaseLevel {idx} bind:checkWinCondition>
				<div class="grid grid-cols-6 grid-rows-5 gap-2 justify-items-center select-none m-4">
					{#each $CharactersStore as character, idx (idx)}
						<div
							class={`p-4 w-12 border rounded text-center relative cursor-pointer ${handleLastRowStyling(
								idx
							)} hover:bg-lime-400 hover:text-white`}
							on:mouseenter={() => (character.show = true)}
							on:mouseleave={() => (character.show = false)}
							on:click={() => handleClick(idx)}
						>
							{fauxChars[idx]}
							<Tooltip
								pointer={character.side == 0 ? 'start' : 'end'}
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
