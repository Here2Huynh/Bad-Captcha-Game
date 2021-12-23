<script>
	import { tweened } from 'svelte/motion';

	import CharactersStore from '../../stores/charactersStores';
	import InputStore from '../../stores/inputStore';

	import { getRandomInt } from '../../shared/helpers/helpers';

	export let idx;
	export let character;

	const tweenA = tweened(0);
	$: tweenA.set(parseInt(character.value));

	const handleClick = (idx) => {
		CharactersStore.update((currentCharacters) => {
			let copyCharacters = [...currentCharacters];
			if (copyCharacters[idx].value == 100) {
				// update inputUI
				InputStore.update((currentInputs) => {
					const copyInput = [...currentInputs];
					const selectedInput = copyInput.find((i) => i.selected);
					if (selectedInput && !selectedInput.disabled) {
						selectedInput.value = copyCharacters[idx].letter;
					}

					return copyInput;
				});
				// reset the input grid
				copyCharacters = copyCharacters.map((c) => {
					c.value = getRandomInt(10, 99);
					return c;
				});
				copyCharacters = copyCharacters.sort(() => Math.random() - 0.5);
			} else {
				copyCharacters[idx].value++;
			}

			return copyCharacters;
		});
	};

	const handleLastRowStyling = (idx) => {
		switch (idx) {
			case $CharactersStore.length - 2:
				return 'col-start-3';
			case $CharactersStore.length - 1:
				return 'col-start-4';
		}
	};
</script>

<div
	class={`p-4 m-auto w-full rounded shadow ${handleLastRowStyling(idx)}`}
	on:click={() => handleClick(idx)}
>
	<div class="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" on:click>
		<div
			class="bg-violet-500 h-4 text-xs font-medium text-slate-50 text-center p-0.5 leading-none rounded-full"
			style={`width: ${character.value}%`}
			on:click
		>
			{`${character.letter}`}
		</div>
	</div>
</div>
