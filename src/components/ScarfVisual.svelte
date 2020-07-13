<script>
	import { theme, depColName, dataset, n, colorPalette } from '../stores';
	import { get } from 'svelte/store';
	import { scaleQuantile } from 'd3-scale';
	import * as d3chromatic from 'd3-scale-chromatic';

	// variables needed to generate scarf visual
	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize

	// define the colorscale for the scarf
	const colorScale = scaleQuantile()
	    .domain(colOfInterest)
	    .range(d3chromatic[`scheme${get(colorPalette)}`][get(n)]);

	const colorArray = colOfInterest.map(d => colorScale(d));

	const backgroundColor = (d) => {
		return `background-color: ${d};`;
	}

</script>

<div>
	{#each colorArray as row}
		<div class="h-3 w-40 border border-gray-500" style={backgroundColor(row)}></div>
	{/each}
</div>

