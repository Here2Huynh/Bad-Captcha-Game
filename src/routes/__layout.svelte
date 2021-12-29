<script>
	import NavBar from '../components/utility/NavBar.svelte';
</script>

<div>
	<NavBar />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
