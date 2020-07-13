import { writable, readable } from 'svelte/store';

// this keeps track of whether we are on light mode or dark mode
// is either "dark" or "light"
export const theme = writable('light');

// these are the names of the columns that represent dependent and independent variables
export const indColName = writable('');
export const depColName = writable('');

// this is the dataset used to generate scarf pattern
export const dataset = writable([]);
export const csvString = writable(''); // csv for dataset in one long string
export const columns = writable([]); // names of columns for the csv

// is the data categorical or numerical?
export const catOrNum = writable('');

// the number of colors for the scarf
export const n = writable(0);

// the name of the ColorBrewer color palette to generate knitting pattern
export const colorPalette = writable('l');
// an object that stories categorical colors 
export const catColors = writable({});

// keeps track of whether pattern has been made
export const patternBool = writable(false);

//the length of the scarf
export const scarfLength = writable("");

// the width of the scarf
export const scarfWidth = writable("");

export const multiplier = writable(1);
