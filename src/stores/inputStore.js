import { writable } from 'svelte/store';

const InputStore = writable([
	{
		selected: false,
		value: ''
	},
	{
		selected: false,
		value: ''
	},
	{
		selected: false,
		value: ''
	},
	{
		selected: false,
		value: ''
	},
	{
		selected: false,
		value: ''
	}
]);

export default InputStore;
