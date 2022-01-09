<script>
	let username;
	let password;
	let repeatPassword;
	let signMyLifeAway = false;
	let badUsername = false;
	let badPassword = false;
	let badRepeatPassword = false;

	$: {
		console.log(username, password, repeatPassword);
	}

	// TODO: add terms and condition on a modal

	// TODO: add random username generator

	const handleSubmit = () => {
		// NOTE: validation to be added here
		// TODO: add custom validation and messagings

		if (username.length < 6) {
			badUsername = !badUsername;
		}
		if (username.length >= 6 && badUsername) {
			badUsername = !badUsername;
		}

		if (password.length < 8) {
			badPassword = !badPassword;
		}

		if (password !== repeatPassword) {
			badRepeatPassword = !badRepeatPassword;
		}
	};
</script>

<div class="flex justify-center mt-32">
	<form on:submit|preventDefault={handleSubmit}>
		<div class="mb-6">
			<label
				for="username"
				class="block mb-2 text-sm font-medium text-zinc-900"
				class:text-red-600={badUsername}>Desired Username</label
			>
			{#if badUsername}
				<p class="text-red-600 italic mb-2">are you evening trying?</p>
			{/if}
			<input
				type="username"
				id="username"
				bind:value={username}
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
				placeholder="not-a-bot"
				required
			/>
		</div>
		<div class="mb-6">
			<label
				for="password"
				class="block mb-2 text-sm font-medium text-zinc-900"
				class:text-red-600={badPassword}>Desired password</label
			>
			{#if badPassword}
				<p class="text-red-600 italic mb-2">are you evening trying?</p>
			{/if}
			<input
				type="password"
				id="password"
				bind:value={password}
				placeholder="very-secure"
				class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
				required
			/>
		</div>
		<div class="mb-6">
			<label for="repeat-password" class="block mb-2 text-sm font-medium text-zinc-900"
				>Repeat password</label
			>
			<input
				type="password"
				id="repeat-password"
				placeholder="repeated-security"
				bind:value={repeatPassword}
				class="shadow-sm bg-gray-50 border border-gray-300 text-zinc-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
				required
			/>
		</div>
		<div class="flex items-start mb-6">
			<div class="flex items-center h-5">
				<input
					id="terms"
					aria-describedby="terms"
					type="checkbox"
					bind:checked={signMyLifeAway}
					class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300  accent-purple-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
				/>
			</div>
			<div class="ml-3 text-sm">
				<label for="terms" class="font-medium text-zinc-900 "
					>I agree with the <a href="#" class="text-purple-400 hover:underline "
						>terms and conditions</a
					></label
				>
			</div>
		</div>
		<button
			type="submit"
			class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>Register new account</button
		>
	</form>
</div>
