<script>
	import { theme } from '../stores';

  export let props; 

  $: anchorStyles = `hover:underline text-${$theme}-h1`;
</script>

<a class={anchorStyles} href={props.href} rel='prefetch'>{props.text}</a>