<script>
	import { theme } from '../stores';

	$: p = `font-mono text-xl text-${$theme}-p`;
	$: span = `font-display text-${$theme}-h1`;
</script>

<svelte:head>
	<title>Home - Knit your data</title>
</svelte:head>

<h1 class={p}>
	<span class={span}>👋 Hi there!</span>
	<br>
	Do you want to knit a data visualization scarf?
</h1>