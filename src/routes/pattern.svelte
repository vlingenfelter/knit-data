<script>
	import { theme, n, columns, colorPalette, depColName, patternBool, catOrNum } from '../stores';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	import Link from '../components/Link.svelte';
	import ScarfVisual from '../components/ScarfVisual.svelte';
	import PatternTemplate from '../components/PatternTemplate.svelte';
	import CategoricalPattern from '../components/CategoricalPattern.svelte';

	$: p = `font-mono text-${$theme}-p`;
	$: h1 = `py-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `py-2 text-xl text-${$theme}-accent font-display tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: anchorStyle = `hover:underline text-${$theme}-h1`;

	onMount(() => {
		if (($columns.length >= 1) && (depColName != "")) {
			patternBool.set(true);
		} 
	});

</script>

<svelte:head>
	<title>About - Knit your data</title>
</svelte:head>

<h1 class={h1}>
	Your Pattern
</h1>

{#if $patternBool && $catOrNum == "Numerical"}
	<PatternTemplate />
	<p class={p}>Numerical Pattern</p>
	<ScarfVisual />
{:else if $patternBool && $catOrNum == "Categorical"}
	<p class={p}>Categorical Pattern</p>
	<PatternTemplate />
	<CategoricalPattern />
{:else}
	<h2 class={h2}>Whoops!</h2>

	<p class={p}> It looks like you haven't generated a pattern yet. That's okay, you can <a class={anchorStyle} href="./generate">click here to generate one!</a></p>

	<PatternTemplate />
{/if}