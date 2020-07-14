<script>
	import { theme, depColName, dataset, catColors } from '../stores';
	import { get } from 'svelte/store';

	// variables needed to generate scarf visual
	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize
	const colorScale = get(catColors);

	const backgroundColor = (d) => {
		return `background-color: ${colorScale[d]};`;
	}

</script>

<div>
	{#each colOfInterest as row}
		<div class="h-3 w-40 border border-gray-500" style={backgroundColor(row)}></div>
	{/each}
</div>