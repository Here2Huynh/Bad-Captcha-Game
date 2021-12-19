<script>
	let levels = [
		{
			idx: 0,
			name: 'growing bars'
		},
		{
			idx: 1,
			name: 'growing bars'
		},
		{
			idx: 2,
			name: 'growing bars'
		},
		{
			idx: 3,
			name: 'growing bars'
		},
		{
			idx: 4,
			name: 'growing bars'
		},
		{
			idx: 5,
			name: 'growing bars'
		}
	];
</script>

<h1 class="my-8 text-4xl text-center">Levels List</h1>
<div class="flex justify-center">
	<div class="w-11/12 rounded-lg shadow-lg lg:w-1/3">
		<ul class="divide-y-2 divide-gray-100">
			{#each levels as level (level.idx)}
				<li class="p-3 hover:bg-zinc-600 hover:text-blue-300">
					<a href={`/levels/${level.idx}`}>{`Level - ${level.idx}`}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
