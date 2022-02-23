<script>
	import { onDestroy, onMount } from 'svelte';

	import { fade } from 'svelte/transition';

	import BaseLevel from '../../shared/BaseLevelLayout.svelte';
	import Modal from '../../shared/Modal.svelte';

	import { CheatingModalStore } from '../../stores/cheatingStore';

	export let idx;

	// function binded from child
	let checkWinCondition;
	let elapsed = 0;
	let duration = 5000;
	let last_time = window.performance.now();
	let frame;

	(function update() {
		// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
		frame = requestAnimationFrame(update);

		const time = window.performance.now();
		elapsed += Math.min(time - last_time, duration - elapsed);

		console.log('elapsed', elapsed);

		if (elapsed === duration) {
			cancelAnimationFrame(frame);
			checkWinCondition(true);
		}

		last_time = time;
	})();

	onDestroy(() => {
		cancelAnimationFrame(frame);
	});
</script>

<div in:fade={{ delay: 500 }}>
	<Modal show={$CheatingModalStore}>
		<BaseLevel {idx} bind:checkWinCondition>
			<div class="flex justify-center">
				<label>
					elapsed time:
					<progress value={elapsed / duration} />
				</label>
			</div>
		</BaseLevel>
	</Modal>
</div>
