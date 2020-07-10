<script>
  import Link from './Link.svelte';
  import { theme } from '../stores';
  import { get } from 'svelte/store';

  const footerStyles = `font-mono flex items-center justify-center flex-wrap pt-8`;
  $: pStyles = `font-mono text-center text-${$theme}-p`;
  $: button = `border-b-2 border-dashed border-${$theme}-h1`
  $: isDark = (get(theme) === 'dark');

  const d3Link = {
    href: 'https://d3js.org',
    text: 'D3'
  }

  const svelteLink = {
    href: 'https://svelte.dev',
    text: 'Svelte'
  }

  const sourceLink = {
    href: 'https://github.com/vlingenfelter/knit-data',
    text: 'Source'
  }

  // change theme when this button is clicked
  const toggleTheme = () => {
    if (get(theme) === "dark") {
      console.log('light mode');
      theme.set("light");
    } else {
      console.log('dark mode');
      theme.set("dark");
    }
  }

</script>

<footer class={footerStyles}>
  <p class={pStyles}>Made with ❤️ in Boston, MA.
    <br >
    Powered by <Link props={svelteLink} /> and <Link props={d3Link} />
    <br >
    <Link props={sourceLink} />
    <br>
    <br>
    <button on:click={toggleTheme} class={button}>{$theme == 'light' ? 'Dark' : 'Light'} theme</button>
  </p>
</footer>