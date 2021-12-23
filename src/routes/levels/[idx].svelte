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

	export let idx;
</script>

<div>
	{#if idx == 1}
		<Level1 {idx} />
	{:else if idx == 2}
		<div>level 2</div>
	{:else}
		<p>Level not available.</p>
	{/if}
</div>
