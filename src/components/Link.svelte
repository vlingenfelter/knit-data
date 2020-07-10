<script>
	import { theme } from '../stores';

	// props is an Object with following fields:
	// props.href: String href url
	// props.text: String text shown in html
  export let props; 

  $: anchorStyles = `hover:underline text-${$theme}-h1`;
</script>

<a class={anchorStyles} href={props.href} rel='prefetch'>{props.text}</a>