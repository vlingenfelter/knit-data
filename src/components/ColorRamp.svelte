<script>
	import * as d3chromatic from 'd3-scale-chromatic';
	import { onMount } from 'svelte';
	import { theme } from '../stores';

	// props:
	// palette is ColorBrewer palette name
	// n is number of blocks to include in ramp
	export let palette = "Blues";
	export let n = 5;

	// an array of length n for each color block
	let blocks = Array.apply(null, Array(n)).map(function (x, i) { return i + 1; });
	let colors = d3chromatic[`scheme${palette}`][n];

	const colorScale = (i) => {
		return `background-color: ${colors[i]};`;
	}

	$: p = `font-mono text-${$theme}-p pr-2`;
</script>

<div class="flex flex-row">
	{#each colors as color,i}
		<div class="h-4 w-4" style={colorScale(i)}></div>
	{/each}
</div>
