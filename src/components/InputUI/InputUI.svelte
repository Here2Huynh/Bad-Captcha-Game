<script>
	import InputStore from '../../stores/inputStore';
	import InputBox from './InputBox.svelte';

	export let wrong;
	export let inputCheck;

	const boxClass = 'box-content border-4 rounded-lg m-1 w-16 h-20 ';
	const inputClass = 'w-full h-full text-center text-5xl outline-slate-400 caret-transparent ';
</script>

<div class="m-5 mt-2 p-4 flex justify-center select-none">
	{#each $InputStore as input, idx (idx)}
		<InputBox {boxClass} {inputClass} {idx} {wrong} {inputCheck} />
	{/each}
</div>
