// import svelte store
import { writable } from 'svelte/store';

export const current = writable('MOVEMENT 1 FLYING DINOSAUR');
export const mvtSet = writable(0);
export const code = writable(false);
export const openDialog = writable(false);
