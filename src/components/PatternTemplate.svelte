<script>
	import { theme, n, columns, colorPalette, depColName, dataset, patternBool, catOrNum, scarfLength, scarfWidth, catColors, multiplier } from '../stores';
	import { ntc } from '../ntc';
	import { get } from 'svelte/store';
	import { needleSize } from '../knit';
	import * as d3 from 'd3';

	let list = ["red", "blue"];
	let colorScale;
	let rowGuide;
	let colorArray;
	let numRowsColor;
	let yards = [];
	let legendLabels = [];
	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize
	const yarnNeedleLookup = needleSize(colOfInterest.length, get(scarfLength), get(scarfWidth));
	const m = get(multiplier);

	if (get(catOrNum) == "Numerical") {
		list = d3[`scheme${$colorPalette}`][$n];

		colorScale = d3.scaleQuantile()
	    .domain(colOfInterest)
	    .range(d3[`scheme${get(colorPalette)}`][get(n)]);

	  let breaks = colorScale.quantiles();
	  legendLabels.push(`Less than ${breaks[0]}`);
	  for (let i = 0; i < (breaks.length-1); i++) {
	  	legendLabels.push(`Between ${breaks[i]} and ${breaks[i+1]}`);
	  }

	  legendLabels.push(`Greater than ${breaks[breaks.length-1]}`);

	 	colorArray = colOfInterest.map(d => colorScale(d));
		rowGuide = [[colorArray[0], 1]];
		numRowsColor = d3[`scheme${get(colorPalette)}`][get(n)].reduce((a,b)=> (a[b]=0,a),{});
	}	else {
		let colorLookupTemp = get(catColors);
		colorArray = colOfInterest.map(d => colorLookupTemp[d]);
		rowGuide = [[colorArray[0], 1]];
		numRowsColor = Object.values(colorLookupTemp).reduce((a,b)=> (a[b]=0,a),{});
		legendLabels = Object.keys(colorLookupTemp);
	}

	for (let i=1; i < colorArray.length; i++) {
		const colorI = colorArray[i]
		numRowsColor[colorI]++;

		if (colorI == rowGuide[rowGuide.length-1][0]) {
			rowGuide[rowGuide.length-1][1]++;
		} else {
			rowGuide.push([colorI, 1]);
		}
	}

	let colors = Object.keys(numRowsColor);
	let denom = colOfInterest.length;
	for (let i=0; i < colors.length; i++) {
		let numerator = numRowsColor[colors[i]];
		let ratio = numerator/denom;
		let inches = ratio * yarnNeedleLookup.yards * m;
		let y = inches / 36;
		yards.push(y.toFixed(0));
	}

	console.log(yards);

	const rows = (chunk) => {
		if (chunk > 1) {
			return "rows";
		} else {
			return "row";
		}
	}

	$: p = `font-mono text-${$theme}-p pb-4`;
	$: li = `font-mono text-${$theme}-p`;
	$: h1 = `pt-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `py-2 text-xl text-${$theme}-accent font-display tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: h3 = `text-xl font-bold text-${$theme}-p font-mono pr-2`;
	$: swatch = `w-8 h-4 mr-2 border border-${$theme}-p`;
	$: stepSpan = `text-${$theme}-accent font-display`;
	$: anchorStyle = `font-mono bg-transparent text-xl hover:bg-${$theme}-h1 text-${$theme}-p hover:text-${$theme}-background  py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;
</script>

<div>
	<h2 class={h2}>About your pattern</h2>

	<p class={p}>
		This pattern was generated using the {$depColName} column from your dataset. { m } knitted rows are equivalent to one row in your dataset. Below is a legend to read the data visualization for the scarf:
	</p>

	<div class="flex flex-col lg:flex-row pb-4">
		<h3 class={h3}>Scarf Data Legend:</h3>
		
		<ul class="lg:pl-2">
			{#each colors as color, i}
			  <div class="flex flex-row items-center">
			  	<div class={swatch} style={`background-color:${color};`}></div>
			  	<li class={li}> {legendLabels[i]}</li>
			  </div>
			{/each}
		</ul> 
	</div>

	<h2 class={h2}>Sizing</h2>

	<p class={p}>
		<b>Finished length:</b> {$scarfLength.split("(")[1].split(")")[0]}
		<br>
		<b>Finished width:</b> {$scarfWidth.split("(")[1].split(")")[0]}
		<br>
	</p>

	<h2 class={h2}>Materials</h2>

	<div class="flex flex-col lg:flex-row pb-4">
		<h3 class={h3}>Yarn:</h3>
		
		<ul class="lg:pl-2">
			{#each colors as color, i}
			  <div class="flex flex-row items-center">
			  	<div class={swatch} style={`background-color:${color};`}></div>
			  	<li class={li}> ~ { yards[i] } yards of { yarnNeedleLookup.yarn[0] } or { yarnNeedleLookup.yarn[1] } weight yarn in Color {i + 1}: {ntc.name(color)[1]}</li>
			  </div>
			{/each}
		</ul> 
	</div>

	<div class="flex flex-col lg:flex-row pb-4">
		<h3 class={h3}>Needles:</h3>
		
		<p class={p}>One pair of straight needles in US #{ yarnNeedleLookup.needle[1] } or size to obtain gauge</p>
	</div>

	<div class="flex flex-col lg:flex-row pb-4">
		<h3 class={h3}>Gauge:</h3>
		
		<p class={p}>{ yarnNeedleLookup.gauge[0] * 4 } stitches and { yarnNeedleLookup.gauge[1] * 4 } rows for 4 inches in stockinette.</p>
	</div>

	<h2 class={h2}>Pattern</h2>

	<p class={p}>
		Cast on { yarnNeedleLookup.castOn } stitches in {ntc.name(colorArray[0])[1]} using your preferred method.
		<br>
		{#each rowGuide as chunk}
		Knit {(chunk[1] * m)} {rows(chunk[1] * m)} in {ntc.name(chunk[0])[1]}
		<br>
		{/each}
		Cast off using your preferred method. Add tassels if desired. 
	</p>

	<h2 class={h2}>Chart</h2>
</div>
