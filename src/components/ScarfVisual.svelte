<script>
	import { theme, indColName, depColName, dataset, n, colorPalette } from '../stores';
	import * as d3 from 'd3';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let el;

	let blocks = Array.apply(null, Array(get(n))).map(function (x, i) { return i + 1; });

	const thisData = get(dataset);
	const colOfInterest = thisData.map(d => d[get(depColName)]);

	const min = d3.min(colOfInterest);
	console.log(`min: ${min}`);

	const max = d3.max(colOfInterest);
	console.log(`min: ${max}`);

	console.log(get(n));

	let colorScale = d3.scaleQuantile()
	    .domain(colOfInterest)
	    .range(d3[`scheme${get(colorPalette)}`][get(n)]);

	onMount(() => {
		d3.select(el)
			.selectAll('div')
			.data(thisData)
			.enter().append('div')
			.style('height', '.75em')
			.style('width', '10em')
			.style('background-color', d => colorScale(d[get(depColName)]));
	});

</script>

<div bind:this={el}></div>