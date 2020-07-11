<script>
	import { theme, indColName, depColName, dataset, n, catColors } from '../stores';
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	// element to bind d3 to
	let el;

	// variables needed to generate scarf visual
	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize
	const colorScale = get(catColors);

	console.log(colorScale);

	// on mount
	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(colOfInterest)
			.enter().append('div')
			.style('border', 'solid')
			.style('border-width', '1px')
			.style('border-color', '#d7d7d7')
			.style('height', '.75em')
			.style('width', '10em')
			.style('background-color', d => colorScale[d]);
	});

</script>

<div bind:this={el}></div>