<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';

	import CharactersStore from '../../stores/charactersStore';
	import { CheatingModalStore } from '../../stores/cheatingStore';
	import InputStore from '../../stores/inputStore';
	import Numbers from '../../stores/numbersStore';
	import PromptCodeStore from '../../stores/promptStore';

	export let idx;
	let inputCode;

	// function binded from child
	let checkWinCondition;

	// const handleLastRowStyling = (idx) => {
	// 	switch (idx) {
	// 		case $CharactersStore.length - 2:
	// 			return 'col-start-3';
	// 		case $CharactersStore.length - 1:
	// 			return 'col-start-4';
	// 	}
	// };

	const handleClick = () => {
		InputStore.update((currentInputs) => {
			const copyInputs = [...currentInputs];
			inputCode = generateInputCode();
			console.log('inputCode', inputCode);
			copyInputs.map((input, idx) => {
				input.value = inputCode[idx];

				return input;
			});

			return copyInputs;
		});

		checkWinCondition(true);

		// InputStore.update((currentInputs) => {
		// 	let copyInputs = [...currentInputs];
		// 	copyInputs.map((input) => {
		// 		input.disabled = false;
		// 		input.correct = null;
		// 		input.wrong = null;
		// 	});

		// 	return copyInputs;
		// });
	};

	const generateInputCode = () => {
		let result = '';

		for (var i = 0; i < 5; i++) {
			result += $Numbers.charAt(Math.floor(Math.random() * $Numbers.length));
		}

		return result;
	};

	onMount(() => {
		inputCode = generateInputCode();
	});
</script>

{#if inputCode}
	<div in:fade={{ delay: 500 }}>
		<Modal show={$CheatingModalStore}>
			<BaseLevel {idx} bind:checkWinCondition promptMode="numbers">
				<div class="flex justify-center">
					<div>
						<button
							on:click={handleClick}
							class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white "
						>
							<span
								class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
							>
								Generate Input Code
							</span>
						</button>
					</div>
				</div>
			</BaseLevel>
		</Modal>
	</div>
{/if}
