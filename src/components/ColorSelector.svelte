<script>
	import { theme, columns } from '../stores';
	import ColorRamp from './ColorRamp.svelte';

	let colors = ["Blues", "Greens", "Greys", "Oranges", "Purples", "Reds", "RdYlBu", "PiYG", "Spectral"];
  let labels = {"Blues":"Blues", "Greens":"Greens", "Greys":"Greys", "Oranges":"Oranges", "Purples":"Purples", "Reds":"Reds", "RdYlBu":"Red -> Blue","PiYG": "Pink -> Green",  "Spectral":"Rainbow"};
  let colorScale;

	$: label = `font-mono text-${$theme}-p pl-2`;
  $: p = `font-mono text-${$theme}-p`;
  $: pLabel = `font-mono text-${$theme}-p pr-2`;
  $: bracket = `text-${$theme}-h1`;
</script>

{#if $columns.length > 1}
  <div class="block">
    <div>
      <div class="flex flex-col">
      	{#each colors as color}
        <label class="inline-flex items-center py-2">
  	      <input type="radio" class="form-radio" name="radio-colors" value={color} bind:group={colorScale}>
  	       <span class={label}>
              <div class="flex flex-row items-center">
                <p class={pLabel}>{labels[color]}</p>
                <ColorRamp palette={color}/>
              </div>
              </span>
        </label>
        {/each}
      </div>
    </div>
  </div>
{:else}
  <div>
    <p class={p}><span class={bracket}>[ </span> Options will appear here after you select data<span class={bracket}> ]</span></p>
  </div>
{/if}