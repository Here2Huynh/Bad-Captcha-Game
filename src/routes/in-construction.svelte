<script>
	import { fade } from 'svelte/transition';
</script>

<div in:fade={{ delay: 500 }}>
	<div
		class="flex p-4 m-10 mt-32 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
		role="alert"
	>
		<svg
			class="inline flex-shrink-0 mr-3 w-5 h-5"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				fill-rule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clip-rule="evenodd"
			/></svg
		>
		<div>
			<span class="font-medium">Hello!</span> This page is under construction 😬. Why don't you
			check out the <a href={'/levels'} class="font-bold">levels</a>?
		</div>
	</div>
</div>
