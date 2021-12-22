import { writable } from 'svelte/store';

const Letters = writable('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

export default Letters;
