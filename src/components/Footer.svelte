<script>
  import Link from './Link.svelte';
  import ThemeCookie from './ThemeCookie.svelte';
  import { theme } from '../stores';
  import { get } from 'svelte/store';
  import { select } from 'd3-selection';

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
      select('body').attr('class', 'bg-light-background'); 

    } else {
      console.log('dark mode');
      select('body').attr('class', 'bg-dark-background'); 
      theme.set("dark");
    }
  }

</script>

<footer class={footerStyles}>
  <p class={pStyles}>Made with ❤️ in Boston, MA.
    <br >
    Powered by <Link props={svelteLink} />
    <br >
    <Link props={sourceLink} />
    <br>
    <br>
    <button on:click={toggleTheme} class={button}>{$theme == 'light' ? 'Dark' : 'Light'} theme</button>
  </p>
  <ThemeCookie />
</footer>