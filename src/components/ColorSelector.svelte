<script>
	import { theme, columns, colorPalette, catOrNum } from '../stores';
	import ColorRamp from './ColorRamp.svelte';
  import NumberColors from './NumberColors.svelte'
  import CategoricalColorSelector from './CategoricalColorSelector.svelte';

  // Arrays containing color palettes
  // colors: ColorBrewer palette names
  // labels: human readable versions of ColorBrewer names
	const colors = ["Blues", "Greens", "Greys", "Oranges", "Purples", "Reds", "RdYlBu", "PiYG", "Spectral"];
  const labels = {"Blues":"Blues", "Greens":"Greens", "Greys":"Greys", "Oranges":"Oranges", "Purples":"Purples", "Reds":"Reds", "RdYlBu":"Red to Blue","PiYG": "Pink to Green",  "Spectral":"Rainbow"};

  // bind this to radio selector
  let colorScale;

  // set global store $colorPalette to value of colorScale
  // auto update when the radio input is changed 
  $: { 
    colorPalette.set(colorScale); 
  }

	$: label = `font-mono text-${$theme}-p pl-2`;
  $: p = `font-mono text-${$theme}-p`;
  $: numericalP = `font-mono text-${$theme}-p pb-4`;
  $: pLabel = `font-mono text-${$theme}-p pr-2`;
  $: bracket = `text-${$theme}-h1`;
</script>

{#if $catOrNum == "Numerical"}
  <div class="flex flex-col">  
    <div class="py-4 flex justify-center">
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
    </div>

    <p class={numericalP}>
    Next, pick how many colors you want to use. After the pattern is generated, it'll tell you how much yarn of each color you will need to make your scarf. 
    </p>

    <div class="py-4 flex justify-center">
      <NumberColors />
    </div>
  </div>

{:else if $catOrNum == "Categorical"}
  <div class="py-4 flex justify-center">
    <CategoricalColorSelector />
  </div>
{:else}
  <div>
    <p class={p}><span class={bracket}>[ </span> Options will appear here after you finish the above step<span class={bracket}> ]</span></p>
  </div>
{/if}