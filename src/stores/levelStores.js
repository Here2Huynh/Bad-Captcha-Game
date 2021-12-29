import { writable } from 'svelte/store';

export const Levels = writable([
	{
		idx: 1,
		name: 'growing bars'
	},
	{
		idx: 2,
		name: 'annoying buttons'
	}
	// {
	// 	idx: 3,
	// 	name: 'dragging time match'
	// },
	// {
	// 	idx: 4,
	// 	name: 'growing bars'
	// },
	// {
	// 	idx: 5,
	// 	name: 'growing bars'
	// }
]);
