<script>
	/**
	 * NOTE: fancy tailwindcss borrowed from
	 * https://devdojo.com/tailwindcss/buttons#_
	 */
	import { fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';
	import { getRandomInt } from '../../shared/helpers/helpers';

	import Letters from '../../stores/lettersStore';
	import { CheatingModalStore } from '../../stores/cheatingStore.js';
	import InputStore from '../../stores/inputStore';

	export let idx;
	let horizontal = false;

	let options = [];

	// function binded from child
	let checkWinCondition;

	const addOption = () => {
		const idx = getRandomInt(0, $Letters.length - 1);
		options = [...options, $Letters[idx]];
	};

	const removeOption = (option) => {
		InputStore.update((currentInputs) => {
			let copyInputs = [...currentInputs];
			const selectedInput = copyInputs.find((i) => i.selected);
			if (selectedInput && !selectedInput.disabled) {
				selectedInput.value = option;
			}

			return copyInputs;
		});

		checkWinCondition(false);

		options = options.filter((x) => x != option);
	};
</script>

<div in:fade={{ delay: 500 }}>
	<Modal show={$CheatingModalStore}>
		<BaseLevel {idx} bind:checkWinCondition>
			<div class="flex justify-center flex-col">
				<label class="text-center mb-4">
					Horizontal?
					<input type="checkbox" bind:checked={horizontal} />
				</label>
				<a
					on:click={addOption}
					href="#_"
					class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg text-center font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50 w-fit m-auto"
				>
					<span
						class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"
					/>
					<span
						class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease"
					>
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={15}
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/></svg
						>
					</span>
					<span class="relative">Add Option</span>
				</a>

				<div
					class="flex gap-0"
					class:flex-row={horizontal}
					class:flex-wrap={horizontal}
					class:flex-col={!horizontal}
					class:flex-auto={horizontal}
				>
					{#each options as option, idx (idx)}
						<div animate:flip class="w-fit m-auto p-4">
							<a
								href="#_"
								on:click={() => removeOption(option)}
								class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
							>
								<span
									class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-amber-300 group-hover:w-full ease"
								/>
								<span
									class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-amber-300 group-hover:w-full ease"
								/>
								<span
									class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"
								/>
								<span
									class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-amber-300 group-hover:h-full ease"
								/>
								<span
									class="absolute inset-0 w-full h-full duration-300 delay-300 bg-amber-500 opacity-0 group-hover:opacity-100"
								/>
								<span
									class="relative transition-colors duration-300 delay-200 group-hover:text-white ease"
									>{option}</span
								>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</BaseLevel>
	</Modal>
</div>
