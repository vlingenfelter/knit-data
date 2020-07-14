<script>
	import { theme } from '../stores';
	import Link from '../components/Link.svelte';

	$: p = `font-mono text-${$theme}-p pb-4`;
	$: h1 = `py-4 text-3xl text-${$theme}-h1 font-display tracking-wide`;
	$: h2 = `py-2 text-xl text-${$theme}-accent font-display tracking-wide border-t-2 border-solid border-${$theme}-accent`;

	const portfolioLink = {
    href: 'https://violetlingenfelter.com/projects/',
    text: 'other data projects'
  }

  const ravelryLink = {
    href: 'https://www.ravelry.com/projects/shylerlover',
    text: 'other knitting projects'
  }
</script>

<svelte:head>
	<title>About - Knit your data</title>
</svelte:head>

<h1 class={h1}>
	About this project
</h1>

<h2 class={h2}>About me</h2>

<p class={p}>I'm Violet. I love data visualization and knitting. You can check out my <Link props={portfolioLink} /> or my <Link props={ravelryLink} />.</p>

<!-- <h2 class={h2}>Special Thanks</h2>

<p class={p}>
	To <b>Robert Gove</b>, for being a data visualization mentor
	<br>
	To <b>Logan Hughes</b>, for being a data visualization mentor
	<br>
	To <b>Anna Gartsman</b>, for being a knitting mentor
</p> -->