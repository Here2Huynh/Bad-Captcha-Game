import { writable } from 'svelte/store';

const InputStore = writable([
	{
		selected: false,
		value: '',
		disabled: false
	},
	{
		selected: false,
		value: '',
		disabled: false
	},
	{
		selected: false,
		value: '',
		disabled: false
	},
	{
		selected: false,
		value: '',
		disabled: false
	},
	{
		selected: false,
		value: '',
		disabled: false
	}
]);

export default InputStore;
