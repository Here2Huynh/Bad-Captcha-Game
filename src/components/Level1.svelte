<script>
	import BaseLevel from '../shared/BaseLevelLayout.svelte';
	import Letters from '../stores/lettersStore';
	import
	export let idx;

	let characters = [];

	// TODO: refactor utility functions
	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	for (let character of $Letters) {
		characters.push({
			value: getRandomInt(10, 99),
			letter: character
		});
	}

	const handleClick = (idx) => {
		const copy = [...characters];
		let characterValue = copy[idx].value;
		if (characterValue == 100) {
			// update inputUI
			// reset the grid
		} else {
			copy[idx].value++;
			characters = copy;
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
