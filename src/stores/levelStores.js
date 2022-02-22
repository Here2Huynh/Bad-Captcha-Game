import { writable } from 'svelte/store';

export const Levels = writable([
	{
		idx: 1,
		name: 'growing-bars'
	},
	{
		idx: 2,
		name: 'annoying-buttons'
	},
	{
		idx: 3,
		name: 'random-chaos'
	},
	{
		idx: 4,
		name: 'add-to-list'
	},
	{
		idx: 5,
		name: 'running-out-of-time'
	}
	// {
	// 	idx: 4,
	// 	name: 'dragging clock match'
	// },
	// {
]);
