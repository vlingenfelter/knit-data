<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	import { theme } from '../stores';

	export let segment;

	$: h1 = `py-4 text-${$theme}-h1 text-3xl font-display tracking-wide`;
	$: accent = `text-${$theme}-accent`;
	$: bodyStyles = `bg-${$theme}-background min-h-screen`;

</script>

<div class={bodyStyles}>
	<div class="flex justify-center">
		<div class="max-w-2xl p-4">
			<div class="print:hidden">
				<h1 class={h1}>
					<a href="."><span class={accent}>data pattern,</span> knitting pattern</a>
				</h1>
				<Nav {segment}/>
			</div>

			<main>
				<slot></slot>
			</main>

			<div class="print:hidden">
				<Footer />
			</div>
		</div>
	</div>
</div>
