<script>
	import { theme } from '../stores';

	$: p = `font-mono text-${theme}-p`;
</script>

<svelte:head>
	<title>Home - Knit your data</title>
</svelte:head>

<p class={p}>
	Hi there! Do you want to knit a data visualization scarf?
</p>