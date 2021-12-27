<script>
	import InputStore from '../../stores/inputStore';

	export let boxClass;
	export let inputClass;
	export let idx;

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

<div
	class={boxClass}
	class:border-cyan-400={$InputStore[idx].selected}
	class:border-red-600={$InputStore[idx].wrong}
	class:border-emerald-400={$InputStore[idx].correct}
	on:click={() => handleClick(idx)}
>
	<input class={inputClass} maxlength="0" type="text" bind:value={$InputStore[idx].value} />
</div>

<style>
	input:focus {
		outline: none;
	}
</style>
