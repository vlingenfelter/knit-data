<script>
	import FileUpload from '../components/FileUpload.svelte';
	import Table from '../components/Table.svelte';
	import IndSelector from '../components/IndSelector.svelte';
	import DepSelector from '../components/DepSelector.svelte';
	import ColorSelector from '../components/ColorSelector.svelte';
	import { theme, columns } from '../stores';

	// styling
	$: p = `font-mono text-${$theme}-p pb-4`;
	$: h1 = `pt-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `pb-2 mt-6 pt-2 text-xl text-${$theme}-p font-mono tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: stepSpan = `text-${$theme}-accent font-display`;

</script>

<svelte:head>
	<title>Make a Pattern - Knit your data</title>
</svelte:head>

<h1 class={h1}>Make a Pattern</h1>

<h2 class={h2}><span class={stepSpan}>Step 1:</span> Upload your data</h2>

<div class="py-4">
	<FileUpload />
</div>

<p class={p}>
	Please upload a csv file with at least 2 columns. One column needs to be a date/time data type (either days of the year, years, time of day, etc) and the other column should be the data that you want to visualize with your scarf. This can be either categorical data (like "hot", "cold", etc) or continuous numerical data (like daily maximum temperatures). 
	<br>
	<br>
	If you don't have a dataset that you want to use, and you just want to see how the pattern generator works, you can choose the default dataset instead of uploading your own csv. This default dataset is daily precipitation, high temperature, and low temperature for 2019 in the Jamaica Plain neighborhood in Boston.
</p>

<h2 class={h2}><span class={stepSpan}>Step 2:</span> Look over your data</h2>

<p class={p}>
	After you choose a dataset, a table will appear above showing you the first 5 rows of your dataset. Now is a good chance to make sure it looks right. 
</p>

<div class="py-4 flex justify-center">
	<Table />
</div>

<h2 class={h2}><span class={stepSpan}>Step 3:</span> Choose which columns to visualize</h2>

<p class={p}>
	After you choose a dataset, two dropdown menus will appear below. This is where you can choose the two variables you would like to visualize. The first one is the independent variable. This should be a column that contains time data (like dates, or dates and times). The second one will be the dependent variable, or what happened at the times that you chose. This variable will be represented on your scarf as stripes of color. 
	<br>
	<br>
	For example, if you are using the default dataset, for the independent variable, you should choose "DATE". For the dependent variable, you can choose "PRCP" (daily precipitaion), "TMIN" (daily minimum temperature), or "TMAX" (daily maximum temperature).
</p>

<div class="py-4 flex justify-center">
	<div class="flex flex-col">
		<IndSelector options={$columns}/>
		<DepSelector options={$columns}/>
	</div>
</div>

<h2 class={h2}><span class={stepSpan}>Step 4:</span> Choose a color scale for your scarf</h2>

<p class={p}>
	If you want your pattern generated to accomodate a specific needle size or yarn weight, this is your place! You can adjust the options below to suit your needs. 
</p>

<div class="py-4 flex justify-center">
	<ColorSelector />
</div>

<h2 class={h2}><span class={stepSpan}>Step 5:</span> Tell me about your knitting preferences (optional)</h2>

<p class={p}>
	If you want your pattern generated to accomodate a specific needle size or yarn weight, this is your place! You can adjust the options below to suit your needs. If you do not change any of these settings, the pattern will be generated for worsted weight yarn.
</p>

