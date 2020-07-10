<script>
	import FileUpload from '../components/FileUpload.svelte';
	import Table from '../components/Table.svelte';
	import DepSelector from '../components/DepSelector.svelte';
	import DataTypeRadio from '../components/DataTypeRadio.svelte';
	import ColorSelector from '../components/ColorSelector.svelte';
	import NumberColors from '../components/NumberColors.svelte';
	import ScarfSpecs from '../components/ScarfSpecs.svelte';
	import { theme, columns } from '../stores';

	// styling
	$: p = `font-mono text-${$theme}-p pb-4`;
	$: h1 = `pt-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `pb-6 mt-6 pt-2 text-xl text-${$theme}-p font-mono tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: stepSpan = `text-${$theme}-accent font-display`;
	$: anchorStyle = `font-mono bg-transparent text-xl hover:bg-${$theme}-h1 text-${$theme}-p hover:text-${$theme}-background  py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;

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
	Please upload a csv file with at least 1 column. This column should be the data that you want to visualize with your scarf. This should be numerical data (like daily maximum temperatures) or categorical data (like "small", "medium", "large"). 
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

<h2 class={h2}><span class={stepSpan}>Step 3:</span> Choose which column to visualize</h2>

<p class={p}>
	After you choose a dataset, two dropdown menus will appear below. This is where you can choose the column you would like to visualize. This variable will be represented on your scarf as stripes of color, in the order of the column. The first row of your column will be the first row of your scarf, and the last column will be the last row.
	<br>
	<br>
	For example, if you are using the default dataset, you can choose "PRCP" (daily precipitaion), "TMIN" (daily minimum temperature), or "TMAX" (daily maximum temperature). You could also choose "DATE", but that would not be an interesting visualization.
	<br>
	<br>
	You also need to select wheter your data is is categorical (each row is the name of a category like "small", "medium", or "large") or numerical (like daily temperatures). 
</p>

<div class="py-4 flex justify-center">
	<div class="flex flex-col">
		<DepSelector options={$columns}/>
	</div>
</div>

<p class={p}>
	You also need to select wheter your data is is categorical (each row is the name of a category like "small", "medium", or "large") or numerical (like daily temperatures). 
</p>

<div class="py-4 flex justify-center">
	<DataTypeRadio />
</div>

<h2 class={h2}><span class={stepSpan}>Step 4:</span> Choose a color palette for your scarf</h2>

<p class={p}>
	If you want your pattern generated to accomodate a specific needle size or yarn weight, this is your place! You can adjust the options below to suit your needs. First pick the color palette that you want to use to visualize your data.
</p>

<ColorSelector />

<h2 class={h2}><span class={stepSpan}>Step 5:</span> Choose your scarf dimensions</h2>

<p class={p}>
	Next, pick what size scarf you want! 
</p>

<div class="py-4 flex justify-center">
	<ScarfSpecs />
</div>

<h2 class={h2}><span class={stepSpan}>Step 6:</span> Make a pattern</h2>

<p class={p}>
	Take a second and review the choices you made. Then click the button below and get taken to your custom pattern!
</p>

<div class="flex justify-center">
	<a class={anchorStyle} href="./pattern">Generate your pattern!</a>
</div>

