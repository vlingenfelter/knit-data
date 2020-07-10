<script>
	import Table from './Table.svelte';
	import { theme, csvString } from '../stores';

	// dynamic variables
	$: files = [] // bound to file input, contains list of input files
	$: fileName = ""; // bound to display of file name in html
	
	// this is fired whenever files is changed and its length is > 0
	$: if (files.length > 0) {
		// new File Reader object to read CSV
		let reader = new FileReader();

		// changes global store $csvString to string of file contents
		// when the reader is done loading
		reader.onload = function(e) {
  		csvString.set(reader.result);
		}
		
		// takes first file from list and reads it as a string
		reader.readAsText(files[0]);

		// displays the name of selected file in the html
		fileName = files[0].name;
	}

	// uses the default data set
	const useDefault = () => {
		csvString.set("default"); // update the csvString to know it needs default data
		fileName = "JP Weather Data.csv"; // display different file name
	}

	$: labelStyle = `bg-transparent hover:bg-${$theme}-h1 text-${$theme}-p hover:text-${$theme}-background font-semibold py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;
	$: p = `font-mono px-4 text-${$theme}-p`;
	$: fileNameStyle = `font-mono text-${$theme}-p break-words`;

</script>

<style>
	.inputfile {
		width: 0.1px;
		height: 0.1px;
		opacity: 0;
		overflow: hidden;
		position: absolute;
		z-index: -1;
	}

</style>

<div class="p-4 flex flex-col lg:flex-row items-center justify-center">
	<input class="inputfile" type="file" id="file" bind:files>
	<label for="file" class={labelStyle}>Choose a csv</label>
	<p class={p}>or</p>
	<button class={labelStyle} on:click={useDefault}>Use default</button>
</div>

{#if fileName.length > 0}
	<div class="py-4 flex flex-row items-center justify-center">
		<p class={fileNameStyle}>File selected: {fileName}</p>
	</div>
{/if}
