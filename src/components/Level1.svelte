<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import BaseLevel from '../shared/BaseLevelLayout.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import Letters from '../stores/lettersStore';
	import CharactersStore from '../stores/charactersStores';
	import { getRandomInt } from '../shared/helpers/helpers';

	export let idx;

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

	console.log('$CharactersStore', $CharactersStore);
</script>

{#if $CharactersStore.length}
	<div in:fade={{ delay: 500 }}>
		<BaseLevel {idx}>
			<div class="grid grid-cols-6 grid-rows-5 gap-2 justify-items-center select-none m-4">
				{#each $CharactersStore as character, idx (idx)}
					<ProgressBar {idx} {character} />
				{/each}
			</div>
		</BaseLevel>
	</div>
{/if}
