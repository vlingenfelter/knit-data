<script>
	import { onMount } from 'svelte';
	import { theme, csvString, columns, dataset } from '../stores';
	import { defaultData } from '../data';
	import { get } from 'svelte/store';

	import * as d3 from 'd3';

	let data = [];
	let head = [];

	$: if ($csvString === "default") {
		data = defaultData;
		data.columns = ["DATE", "PRCP", "TMAX", "TMIN"];
		dataset.set(data);

		columns.set(data.columns);

		console.log(data);
		head = data.slice(0,5);

	} else if (get(csvString).length > 1) {
		data = d3.csvParse(get(csvString));
		columns.set(data.columns);
		dataset.set(data);

		console.log(data);
		head = data.slice(0,5);
	}

	// styling
	$: tableStyle = `font-mono w-full border-collapse table-auto text-${$theme}-p`;
	$: thStyle = `text-${$theme}-h1 text-left px-4`;
	$: p = `font-mono text-${$theme}-p`;
	$: bracket = `text-${$theme}-h1`;

</script>

{#if data.length > 0}
<div class="overflow-x-auto">
	<table class={tableStyle}>
		<tr class='pb-2 border-b-2 border-solid'>
			{#each data.columns as col}
				<th class={thStyle}>{col}</th>
			{/each}
		</tr>

		{#each head as row}
			<tr>
				{#each data.columns as col}
					<td class="px-4 py-2">{row[col]}</td>
				{/each}
			</tr>
		{/each}
	</table>
</div>
{:else}
	<p class={p}><span class={bracket}>[ </span>A table will appear here after you select data<span class={bracket}> ]</span></p>
{/if}
