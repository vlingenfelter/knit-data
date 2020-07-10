<script>
	import { theme } from '../stores';

	export let segment;

	const nav = `flex items-center justify-between flex-wrap pb-4`;
	$: anchorStyle = `font-mono text-${$theme}-p hover:text-${$theme}-h1 text-xl border-b-2 border-transparent hover:border-solid hover:border-${$theme}-h1`;
	$: selected = `font-mono text-${$theme}-p text-xl border-b-2 border-dashed hover:border-solid border-${$theme}-h1`;
</script>

<nav class={nav}>
	<ul class="w-full block flex-grow flex items-center w-auto">
		<li class="pr-4"><a class="{segment === 'generate' ? selected : anchorStyle}" href="generate">generate</a></li>
		<li class="px-4"><a class="{segment === 'about' ? selected : anchorStyle}" href="about">about</a></li>
	</ul>
</nav>
