<script context="module">
	export async function load({ page }) {
		return {
			props: {
				idx: page.params.idx
			}
		};
	}
</script>

<script>
	import Level1 from '../../components/level1/Level1.svelte';
	import Level2 from '../../components/level2/Level2.svelte';

	export let idx;
</script>

<div>
	{#if idx == 1}
		<Level1 {idx} />
	{:else if idx == 2}
		<Level2 {idx} />
	{:else}
		<p>Level not available.</p>
	{/if}
</div>
