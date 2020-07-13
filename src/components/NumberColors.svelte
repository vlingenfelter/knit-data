<script>
	import { theme, columns, n } from '../stores';

	// bound to the number selector
	let a = 2;
	n.set(2);
	
	// when a is changed, update global store $n
	$: { 
		n.set(a); 
	} 

	$: labelStyle = `bg-transparent text-${$theme}-p font-semibold py-2 px-4 border-2 rounded border-dashed border-${$theme}-h1`;
	$: p = `font-mono text-${$theme}-p`;
	$: bracket = `text-${$theme}-h1`;
</script>


{#if $columns.length > 1}
	<label>
		<input class={labelStyle} type=number bind:value={a} min=2 max=12>
		<input type=range bind:value={a} min=2 max=12>
	</label>
{:else}
	<div>
    <p class={p}><span class={bracket}>[ </span> Options will appear here after you select data<span class={bracket}> ]</span></p>
  </div>
{/if}