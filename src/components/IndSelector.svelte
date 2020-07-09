<script>
	import { theme, indColName } from '../stores';

	export let options = [];
	let selected;

	const onChange = () => {
		indColName.set(selected);
	}

	$: select = `block appearance-none w-full bg-${$theme}-background text-${$theme}-p border-2 border-dashed border-${$theme}-h1 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`;
	$: p = `font-mono text-${$theme}-p`;
	$: label = `font-mono text-${$theme}-p pr-2`;
	$: bracket = `text-${$theme}-h1`;

</script>

{#if options.length >= 1}
	<div class="p-4 flex flex-row items-center">
		<p class={label}>Select timeseries column:  </p>
		<div class="inline-block relative w-40">
			<select on:blur={onChange} class={select} bind:value={selected}>
			  {#each options as option}
			  	<option value={option}>{option}</option>
			  {/each}
			</select>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
		</div>
	</div>
{:else}
	<div>
		<p class={p}><span class={bracket}>[ </span> Options will appear here after you select data<span class={bracket}> ]</span></p>
	</div>
{/if}