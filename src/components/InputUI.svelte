<script>
	import InputStore from '../stores/inputStore';

	const boxClass = 'box-content border-4 rounded-lg m-1 w-16 h-20';
	const inputClass = 'w-full h-full text-center text-5xl outline-slate-400 caret-transparent';

	const handleInput = (idx) => {
		InputStore.update((currentInputs) => {
			const copiedInputs = [...currentInputs];
			// copiedInputs[idx].value = 'T';
			// TODO: input updates occurs here

			return copiedInputs;
		});
	};

	const handleClick = (idx) => {
		InputStore.update((currentInputs) => {
			const copiedInputs = [...currentInputs];
			copiedInputs[idx].selected = !copiedInputs[idx].selected;

			copiedInputs.map((input, _i) => {
				if (idx != _i) input.selected = false;
			});

			return copiedInputs;
		});
	};
</script>

<div class="m-5 mt-2 p-4 flex justify-center">
	<div
		class={boxClass}
		class:border-cyan-400={$InputStore[0].selected}
		on:click={() => handleClick(0)}
	>
		<input
			class={inputClass}
			maxlength="1"
			type="text"
			on:click={() => handleInput(0)}
			bind:value={$InputStore[0].value}
		/>
	</div>
	<div
		class={boxClass}
		class:border-cyan-400={$InputStore[1].selected}
		on:click={() => handleClick(1)}
	>
		<input
			class={inputClass}
			maxlength="1"
			type="text"
			on:click
			bind:value={$InputStore[1].value}
		/>
	</div>
	<div
		class={boxClass}
		class:border-cyan-400={$InputStore[2].selected}
		on:click={() => handleClick(2)}
	>
		<input
			class={inputClass}
			maxlength="1"
			type="text"
			on:click
			bind:value={$InputStore[2].value}
		/>
	</div>
	<div
		class={boxClass}
		class:border-cyan-400={$InputStore[3].selected}
		on:click={() => handleClick(3)}
	>
		<input
			class={inputClass}
			maxlength="1"
			type="text"
			on:click
			bind:value={$InputStore[3].value}
		/>
	</div>
	<div
		class={boxClass}
		class:border-cyan-400={$InputStore[4].selected}
		on:click={() => handleClick(4)}
	>
		<input
			class={inputClass}
			maxlength="1"
			type="text"
			on:click
			bind:value={$InputStore[4].value}
		/>
	</div>
</div>

<style>
	input:focus {
		outline: none;
	}
</style>
