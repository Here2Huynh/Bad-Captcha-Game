<script>
	import BaseLevel from '../shared/BaseLevelLayout.svelte';
	export let idx;

	const handleClick = () => {};
</script>

<BaseLevel {idx}>
	<div class="grid grid-cols-6 grid-rows-5">
		<div class="p-4 m-auto w-full rounded shadow">
			<div class="w-full bg-gray-200 rounded-full dark:bg-gray-700">
				<div
					class="bg-green-600 text-xs font-medium text-slate-50 text-center p-0.5 leading-none rounded-full"
					style="width: 45%"
					on:click={handleClick}
				>
					{`A - 45%`}
				</div>
			</div>
		</div>
	</div>
</BaseLevel>
