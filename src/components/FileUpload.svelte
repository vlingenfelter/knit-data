<script>
	import Table from './Table.svelte';
	import { theme, csvString } from '../stores';

	$: files = []
	$: text = ""
	$: fileName = "";
	
	$: if (files.length > 0) {
		let reader = new FileReader();

		reader.onload = function(e) {
  		csvString.set(reader.result);
		}
		
		reader.readAsText(files[0]);  
		fileName = files[0].name;
	}

	const useDefault = () => {
		csvString.set("default");
		fileName = "default";
	}

	$: labelStyle = `bg-transparent hover:bg-${$theme}-h1 text-${$theme}-p hover:text-${$theme}-background font-semibold py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;
	$: p = `font-mono px-4 text-${$theme}-p`;

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

<div class="p-4 flex flex-row items-center justify-center">
	<input class="inputfile" type="file" id="file" bind:files>
	<label for="file" class={labelStyle}>Choose a csv</label>
	<p class={p}>or</p>
	<button class={labelStyle} on:click={useDefault}>Use default</button>
</div>

{#if fileName == "default"}
	<div class="p-4 flex flex-row items-center justify-center">
		<p class={p}>File selected: default data</p>
	</div>
{:else if fileName.length > 0}
	<div class="p-4 flex flex-row items-center justify-center">
		<p class={p}>File selected: {fileName}</p>
	</div>
{/if}
