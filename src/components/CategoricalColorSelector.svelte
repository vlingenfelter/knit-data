<script>
	import { theme, depColName, dataset, colorPalette, catOrNum } from '../stores';
	import { get } from 'svelte/store';

	const thisData = get(dataset); // the dataset needed
	const colOfInterest = thisData.map(d => d[get(depColName)]); // the column to visualize
	const categories = [...new Set(colOfInterest.map(item => item))];

	const brewerPaired = ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00','#cab2d6','#6a3d9a','#ffff99','#b15928'];

	let colorLookup = categories.reduce((a,b)=> (a[b]='',a),{});

	for (let i = 0; i < categories.length; i++) {
		colorLookup[categories[i]] = brewerPaired[i];
	}

	let colors = [];

	const replaceBlank = (string) => {
		if (string == "") {
			return "Blank";
		} else {
			return string;
		}
	}

	$: label = `font-mono text-${$theme}-p pr-2`;
	$: p = `font-mono text-${$theme}-p`;
	$: bracket = `text-${$theme}-h1`;

</script>

<div class="flex flex-col">
	{#each categories as category}
	<div class="flex py-2 flex-row">
		<label class={label} for={category}>{replaceBlank(category)}</label>
	  <input type="color" id={category} name={category} value={colorLookup[category]}>
	</div>
  {/each}
</div>