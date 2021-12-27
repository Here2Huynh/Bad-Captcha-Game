import { writable } from 'svelte/store';

const InputStore = writable([
	{
		selected: false,
		value: '',
		disabled: false,
		correct: null,
		wrong: null
	},
	{
		selected: false,
		value: '',
		disabled: false,
		correct: null,
		wrong: null
	},
	{
		selected: false,
		value: '',
		disabled: false,
		correct: null,
		wrong: null
	},
	{
		selected: false,
		value: '',
		disabled: false,
		correct: null,
		wrong: null
	},
	{
		selected: false,
		value: '',
		disabled: false,
		correct: null,
		wrong: null
	}
]);

export default InputStore;
