import { writable } from 'svelte/store';

export const levels = writable([
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
]);
