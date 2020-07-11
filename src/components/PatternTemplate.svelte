<script>
	import { theme, n, columns, colorPalette, depColName, patternBool, catOrNum, scarfLength, scarfWidth } from '../stores';
	import { ntc } from '../ntc';

	$: p = `font-mono text-${$theme}-p pb-4`;
	$: h1 = `pt-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `py-2 text-xl text-${$theme}-accent font-display tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: stepSpan = `text-${$theme}-accent font-display`;
	$: anchorStyle = `font-mono bg-transparent text-xl hover:bg-${$theme}-h1 text-${$theme}-p hover:text-${$theme}-background  py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;
</script>

<div>
	<h2 class={h2}>Sizing</h2>

	<p class={p}>
		<b>Finished length:</b> {$scarfLength}
		<br>
		<b>Finished width:</b> {$scarfWidth}
	</p>

	<h2 class={h2}>Materials</h2>

	<p class={p}>
		<b>Yarn:</b> yarn
		<br>
		<b>Gauge:</b> yarn
		<br>
		<b>Needles:</b> yarn
		<br>
		<b>Notions:</b> yarn
	</p>

	<h2 class={h2}>Pattern</h2>

	<p class={p}>
		Cast on 35 stitches in {ntc.name("#1fa898")[1]}.
	</p>

	<h2 class={h2}>Chart</h2>

	<p class={p}>
		Please upload a csv file with at least 1 column. This column should be the data that you want to visualize with your scarf. This should be numerical data (like daily maximum temperatures) or categorical data (like "small", "medium", "large"). 
		<br>
		<br>
		If you don't have a dataset that you want to use, and you just want to see how the pattern generator works, you can choose the default dataset instead of uploading your own csv. This default dataset is daily precipitation, high temperature, and low temperature for 2019 in the Jamaica Plain neighborhood in Boston.
	</p>
</div>
