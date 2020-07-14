<script>
	import { theme, columns, scarfLength, scarfWidth } from '../stores';
	import { scarfWidths, scarfLengths } from '../knit';

	// bound to options, updates to selected option
	let selectedWidth = "Standard (7-8 inches)";
	scarfWidth.set(selectedWidth);
	let selectedLength = "Medium (~70 inches)";
	scarfLength.set(selectedLength);

	const onWidthChange = () => {
		scarfWidth.set(selectedWidth);
	}

	const onLengthChange = () => {
		scarfLength.set(selectedLength);
	}

	$: select = `block appearance-none w-full bg-${$theme}-background text-${$theme}-p border-2 border-dashed border-${$theme}-h1 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`;
	$: p = `font-mono text-${$theme}-p`;
	$: label = `font-mono text-${$theme}-p pr-2`;
	$: bracket = `text-${$theme}-h1`;

</script>

{#if $columns.length >= 1}
<div class="flex flex-col">
	<div class="p-4 flex flex-col lg:flex-row items-center">
		<p class={label}>Select scarf width:  </p>
		<div class="inline-block relative w-64">
			<select on:blur={onWidthChange} class={select} bind:value={selectedWidth}>
			  {#each scarfWidths as option}
			  	<option value={option}>{option}</option>
			  {/each}
			</select>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
		</div>
	</div>
	<div class="p-4 flex flex-col lg:flex-row items-center">
		<p class={label}>Select scarf length:  </p>
		<div class="inline-block relative w-64">
			<select on:blur={onLengthChange} class={select} bind:value={selectedLength}>
			  {#each scarfLengths as option}
			  	<option value={option}>{option}</option>
			  {/each}
			</select>
			<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
		</div>
	</div>
</div>
{:else}
	<div>
		<p class={p}><span class={bracket}>[ </span> Options will appear here after you select data<span class={bracket}> ]</span></p>
	</div>
{/if}
