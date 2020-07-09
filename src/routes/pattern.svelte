<script>
	import { theme, n, columns, colorPalette, indColName, depColName } from '../stores';
	import { get } from 'svelte/store';
	import Link from '../components/Link.svelte';
	import ScarfVisual from '../components/ScarfVisual.svelte';

	$: p = `font-mono text-${$theme}-p`;
	$: h1 = `py-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `py-2 text-xl text-${$theme}-accent font-display tracking-wide border-t-2 border-solid border-${$theme}-accent`;
	$: anchorStyle = `hover:underline text-${$theme}-h1`;

</script>

<svelte:head>
	<title>About - Knit your data</title>
</svelte:head>

<h1 class={h1}>
	Your Pattern
</h1>

{#if $columns.length < 1}
	<h2 class={h2}>Whoops!</h2>

	<p class={p}> It looks like you haven't generated a pattern yet. That's okay, you can <a class={anchorStyle} href="./generate">click here to generate one!</a></p>
{:else}
	<h2 class={h2}>Materials</h2>

	<p class={p}> {get(n)} {get(colorPalette)} {get(columns)}</p>

	<ScarfVisual />
{/if}