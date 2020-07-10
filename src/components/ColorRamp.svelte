<script>
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	import { theme } from '../stores';

	// props:
	// palette is ColorBrewer palette name
	// n is number of blocks to include in ramp
	export let palette = "Blues";
	export let n = 5;

	// an array of length n for each color block
	let blocks = Array.apply(null, Array(n)).map(function (x, i) { return i + 1; })

	// element to bind d3 to
	let el;

	// color scale function
	// int => rgb value
	let color = d3.scaleThreshold()
	    .domain(d3.range(1, n+1))
	    .range(d3[`scheme${palette}`][n+1]);

	// on mount:
	// for each block in block make a div, color according to color scale
	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(blocks)
			.enter().append('div')
			.style('height', '1em')
			.style('width', '1em')
			.style('background-color', d => color(d));
	});

	$: p = `font-mono text-${$theme}-p pr-2`;
</script>

<div class="flex flex-row" bind:this={el}></div>
