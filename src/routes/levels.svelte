<script>
	import { fade } from 'svelte/transition';
	import { Levels } from '../stores/levelStores';
</script>

<div in:fade={{ delay: 500 }}>
	<h1 class="my-8 text-4xl text-center">Levels List</h1>
	<div class="flex justify-center">
		<div class="w-11/12 rounded-lg lg:w-1/3">
			<ul class="border-2 border-zinc-600">
				{#each $Levels as level (level.idx)}
					<a href={`/levels/${level.idx}`}>
						<li class="p-3 hover:bg-zinc-600 hover:text-purple-400">
							{`Level - ${level.idx}`}
						</li>
					</a>
				{/each}
			</ul>
		</div>
	</div>
</div>
