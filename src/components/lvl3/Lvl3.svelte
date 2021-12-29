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

	// function binded from child
	let checkWinCondition;

	const handleLastRowStyling = (idx) => {
		switch (idx) {
			case $CharactersStore.length - 2:
				return 'col-start-3';
			case $CharactersStore.length - 1:
				return 'col-start-4';
		}
	};

	const handleClick = () => {};
</script>

{#if promptCode}
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
