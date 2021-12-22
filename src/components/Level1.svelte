<script>
	import BaseLevel from '../shared/BaseLevelLayout.svelte';
	import Letters from '../stores/lettersStore';
	import InputStore from '../stores/inputStore';
	import { getRandomInt } from '../shared/helpers/helpers';
	export let idx;

	let characters = [];

	for (let character of $Letters) {
		characters.push({
			value: getRandomInt(10, 99),
			letter: character
		});
	}

	const handleClick = (idx) => {
		const copyCharacters = [...characters];
		if (copyCharacters[idx].value == 100) {
			// update inputUI
			InputStore.update((currentInputs) => {
				const copyInput = [...currentInputs];
				const selectedInput = copyInput.find((i) => i.selected);
				selectedInput.value = copyCharacters[idx].letter;
				return copyInput;
			});
			// reset the input grid
			characters = characters.map((c) => {
				c.value = getRandomInt(10, 99);
				return c;
			});
		} else {
			copyCharacters[idx].value++;
			characters = copyCharacters;
		}
	};

	const handleLastRowStyling = (idx) => {
		switch (idx) {
			case characters.length - 2:
				return 'col-start-3';
			case characters.length - 1:
				return 'col-start-4';
		}
	};
</script>

<BaseLevel {idx}>
	<div class="grid grid-cols-6 grid-rows-5 gap-2 justify-items-center">
		{#each characters as character, idx (idx)}
			<div
				class={`p-4 m-auto w-full rounded shadow ${handleLastRowStyling(idx)}`}
				on:click={() => handleClick(idx)}
			>
				<div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" on:click>
					<div
						class="bg-green-600 h-4 text-xs font-medium text-slate-50 text-center p-0.5 leading-none rounded-full"
						style={`width: ${character.value}%`}
						on:click
					>
						{`${character.letter}`}
					</div>
				</div>
			</div>
		{/each}
	</div>
</BaseLevel>
