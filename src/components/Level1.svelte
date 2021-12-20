<script>
	export let idx;

	// TODO: turn this into a level page template

	let keyPresses = [];

	const ctrlKeys = ['MetaLeft', 'MetaRight'];
	const copyAndPastekeys = ['KeyC', 'KeyV'];

	const handleKeyDown = (e) => {
		keyPresses.push(e.code);

		if (
			keyPresses.length == 2 &&
			ctrlKeys.includes(keyPresses[0]) &&
			copyAndPastekeys.includes(keyPresses[1])
		) {
			// TODO: upgrade this to a modal
			alert(`Hey, why you are trying to cheat? ha?`);
			keyPresses = [];
		}
	};
</script>

<svelte:window on:keydown={handleKeyDown} />

<h1 class="m-10 text-center text-2xl underline underline-offset-4">Level {idx}</h1>
<div class="m-5 flex justify-center">
	<div class="box-content p-4 border-4 rounded-lg">
		<div class="">
			<!-- TODO: improve this to randomized -->
			<h1 class="text-5xl hover:blur-2xl select-none">12345</h1>
		</div>
	</div>
</div>
