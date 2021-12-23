<script>
	import InputStore from '../../stores/inputStore';
	import PromptCodeStore from '../../stores/promptStore';

	export let boxClass;
	export let inputClass;
	export let idx;

	let inputCheck;
	let wrong;

	$: if ($PromptCodeStore) {
		inputCheck = $InputStore[idx].value === $PromptCodeStore[idx];
		if ($InputStore[idx].value.length && !$InputStore[idx].disabled) {
			wrong = !inputCheck;

			InputStore.update((currentInputs) => {
				const copiedInputs = [...currentInputs];
				copiedInputs[idx].disabled = wrong;

				return copiedInputs;
			});
		}
	}

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
	class:border-red-600={wrong}
	class:border-emerald-400={inputCheck}
	on:click={() => handleClick(idx)}
>
	<input class={inputClass} maxlength="0" type="text" bind:value={$InputStore[idx].value} />
</div>

<style>
	input:focus {
		outline: none;
	}
</style>
