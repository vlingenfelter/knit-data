<script>
	import { theme, catOrNum, columns } from '../stores';

	// options for the dropdown menu
	let options = ["Categorical", "Numerical"];

	// bound to options, updates to selected option
	let selected;

	// when a column name is selected, update global store $indColName
	// actually is fired on blur, not on change
	$: { 
    catOrNum.set(selected); 
  }

  $: label = `font-mono text-${$theme}-p pl-2`;
	$: select = `block appearance-none w-full bg-${$theme}-background text-${$theme}-p border-2 border-dashed border-${$theme}-h1 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline`;
	$: p = `font-mono text-${$theme}-p`;
	$: bracket = `text-${$theme}-h1`;

</script>

{#if $columns.length > 1}
  <div class="block">
    <div>
      <div class="flex flex-col">
      	{#each options as option}
        <label class="inline-flex items-center py-2">
  	      <input type="radio" class="form-radio" name="radio-colors" value={option} bind:group={selected}>
  	       <span class={label}>
              <div class="flex flex-row items-center">
                <p class={p}>{option}</p>
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