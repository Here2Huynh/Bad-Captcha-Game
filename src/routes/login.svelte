<script>
	import { goto } from '$app/navigation';

	let username;
	let password;
	let remember = false;

	// TODO: add remember functionality to pull from local storage

	const handleSubmit = (e) => {
		// NOTE: add vadlidation here
		goto('/in-construction');
	};
</script>

<div>
	<div class="flex justify-center mt-32">
		<form on:submit|preventDefault={handleSubmit}>
			<div class="mb-6">
				<label for="username" class="block mb-2 text-sm font-medium text-zinc-900 ">Username</label>
				<input
					type="text"
					id="username"
					bind:value={username}
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="not-a-bot"
					required
				/>
			</div>
			<div class="mb-6">
				<label for="password" class="block mb-2 text-sm font-medium text-zinc-900 ">Password</label>
				<input
					type="password"
					id="password"
					bind:value={password}
					placeholder="something-secure"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					required
				/>
			</div>
			<div class="flex items-start mb-6">
				<div class="flex items-center h-5">
					<input
						id="remember"
						aria-describedby="remember"
						type="checkbox"
						bind:checked={remember}
						class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-purple-300 accent-purple-400"
					/>
				</div>
				<div class="ml-3 text-sm">
					<label for="remember" class="font-medium text-zinc-900 ">Remember me</label>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				>Login
			</button>
		</form>
	</div>
</div>
