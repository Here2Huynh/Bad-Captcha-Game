<script>
	export let promptCodeLength;

	const promptCodeObjArr = Array(promptCodeLength).fill({ value: '', selected: false });

	let input_one = false;
	let input_two = false;
	let input_three = false;
	let input_four = false;
	let input_five = false;
</script>

<div class="m-5 mt-2 flex justify-center">
	<div
		class="box-content p-4 border-4 rounded-lg m-1 "
		class:border-cyan-400={input_one}
		on:click={() => (input_one = !input_one)}
	>
		<input class="w-5 h-10 text-5xl m-1 outline-slate-400" maxlength="0" type="text" on:click />
	</div>
	<div
		class="box-content p-4 border-4 rounded-lg m-1 "
		class:border-cyan-400={input_two}
		on:click={() => (input_two = !input_two)}
	>
		<input class="w-5 h-10 text-5xl m-1 outline-slate-400" maxlength="0" type="text" on:click />
	</div>
	<div
		class="box-content p-4 border-4 rounded-lg m-1 "
		class:border-cyan-400={input_three}
		on:click={() => (input_three = !input_three)}
	>
		<input class="w-5 h-10 text-5xl m-1 outline-slate-400" maxlength="0" type="text" on:click />
	</div>
	<div
		class="box-content p-4 border-4 rounded-lg m-1 "
		class:border-cyan-400={input_four}
		on:click={() => (input_four = !input_four)}
	>
		<input class="w-5 h-10 text-5xl m-1 outline-slate-400" maxlength="0" type="text" on:click />
	</div>
	<div
		class="box-content p-4 border-4 rounded-lg m-1 "
		class:border-cyan-400={input_five}
		on:click={() => (input_five = !input_five)}
	>
		<input class="w-5 h-10 text-5xl m-1 outline-slate-400" maxlength="0" type="text" on:click />
	</div>
</div>

<style>
	input:focus {
		outline: none;
	}
</style>
