<script>
	import { fade } from 'svelte/transition';

	const options = [
		{ name: 'Join', route: '/join' },
		{ name: 'Login', route: '/login' },
		{ name: 'idc', route: '/levels' }
	];
</script>

<div out:fade={{ delay: 100 }} in:fade={{ delay: 500 }}>
	<div class="flex justify-center mt-20">
		<div class="inline-flex rounded-md shadow-sm" role="group">
			<a href={'/join'}>
				<button
					type="button"
					class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
				>
					Join
				</button>
			</a>

			<a href={'/login'}>
				<button
					type="button"
					class="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700  dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
				>
					Login
				</button>
			</a>

			<a href={'/levels'}>
				<button
					type="button"
					class="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
				>
					idc
				</button>
			</a>
		</div>
	</div>
</div>
