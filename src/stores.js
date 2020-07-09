import { writable, readable } from 'svelte/store';

export const theme = writable('light');

// variable names
// these are the names of the columns that 
export const indColName = writable('');
export const depColName = writable('');
export const dataset = writable([]);

export const csvString = writable('');
export const columns = writable([]);
export const n = writable(0);
export const colorPalette = writable('');