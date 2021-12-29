<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';

	import Letters from '../../stores/lettersStore';
	import CharactersStore from '../../stores/charactersStore';
	import { CheatingModalStore } from '../../stores/cheatingStore.js';

	export let idx;

	// function binded from child
	let checkWinCondition;

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
</script>

{#if $CharactersStore.length}
	<div in:fade={{ delay: 500 }}>
		<Modal show={$CheatingModalStore}>
			<BaseLevel {idx} bind:checkWinCondition>
				<div class="grid grid-cols-6 grid-rows-5 gap-2 justify-items-center select-none m-4">
					{#each $CharactersStore as character, idx (idx)}
						<ProgressBar {idx} {character} on:input-entered={checkWinCondition} />
					{/each}
				</div>
			</BaseLevel>
		</Modal>;
	</div>
{/if}
