<script>
	import { theme, indColName, depColName, dataset, n, colorPalette } from '../stores';
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	// element to bind d3 to
	let el;

	// variables needed to generate scarf visual
	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize
	const min = d3.min(colOfInterest); // minimum value for the dependent variable
	const max = d3.max(colOfInterest); // maximum value for the dependent variable

	// define the colorscale for the scarf
	const colorScale = d3.scaleQuantile()
	    .domain(colOfInterest)
	    .range(d3[`scheme${get(colorPalette)}`][get(n)]);

	// on mount
	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(thisData)
			.enter().append('div')
			.style('border', 'solid')
			.style('border-width', '1px')
			.style('border-color', '#d7d7d7')
			.style('height', '.75em')
			.style('width', '10em')
			.style('background-color', d => colorScale(d[get(depColName)]));
	});

</script>

<div bind:this={el}></div>