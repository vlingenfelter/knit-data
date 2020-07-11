<script>
	import { theme } from '../stores';
  import { get } from 'svelte/store';
  import { select } from 'd3-selection';
  import { onMount } from 'svelte';

  let toggle = (get(theme) === 'dark');
  let mounted = false;

	$: if (toggle) {
		theme.set('dark');
    if (mounted) { 
      select('body').attr('class', 'bg-dark-background'); 
      updateCookie('dark');
    }
	} else {
		theme.set('light');
    if (mounted) { 
      select('body').attr('class', 'bg-light-background'); 
      updateCookie('light');
      console.log(getCookie('theme'));
    }
  }

  const updateCookie = (theme) => {
    document.cookie = `theme=${theme};`;
  }

  const getCookie = (cookie) => {
    let name = cookie + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  
  onMount(() => { 
    const cookie = getCookie('theme');
  
    if (cookie != '') {
      toggle = (cookie === 'dark');
    }
    mounted = true;
  });

</script>

<div>
 </div>