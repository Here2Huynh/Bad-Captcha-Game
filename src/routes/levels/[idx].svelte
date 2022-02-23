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
	import Level1 from '../../components/lvl1/Lvl1.svelte';
	import Level2 from '../../components/lvl2/Lvl2.svelte';
	import Level3 from '../../components/lvl3/Lvl3.svelte';
	import Level4 from '../../components/lvl4/Lvl4.svelte';
	import Level5 from '../../components/lvl5/Lvl5.svelte';

	export let idx;
</script>

<div>
	{#if idx == 1}
		<Level1 {idx} />
	{:else if idx == 2}
		<Level2 {idx} />
	{:else if idx == 3}
		<Level3 {idx} />
	{:else if idx == 4}
		<Level4 {idx} />
	{:else if idx == 5}
		<Level5 {idx} />
	{:else}
		<p class="text-center">Level not available.</p>
	{/if}
</div>
