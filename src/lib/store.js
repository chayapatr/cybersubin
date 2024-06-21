// import svelte store
import { writable } from 'svelte/store';

export const current = writable(6);
export const mvtSet = writable(0);
export const code = writable(false);
export const openDialog = writable(false);
