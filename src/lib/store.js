// import svelte store
import { writable } from 'svelte/store';

export const current = writable(1);
export const mvtSet = writable(0);
export const openDialog = writable(false);

export const element = writable('Energy');
export const openElementDialog = writable(false);

export const code = writable(false);
export const slider = writable(0);
