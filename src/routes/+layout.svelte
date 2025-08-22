<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { page } from '$app/state';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{page.url.pathname} - quantumkya.dev</title>
</svelte:head>

{#if page.url.pathname !== '/'}
<div class="bg-green-600 absolute z-10 right-2"><a href="/">&lt;&lt; Return to Home</a></div>
{/if}

{@render children?.()}
