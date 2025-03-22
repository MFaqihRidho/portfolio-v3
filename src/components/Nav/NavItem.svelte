<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { page } from '$app/stores';
	export let path;
	export let label;
</script>

<a
	href={path}
	on:click={() => dispatch('click')}
	class={`lg:px-8 px-5 w-full lg:w-fit py-3.5 border-b-[3px] hover:text-text-active ${$page.url.pathname === path ? 'lg:!border-b-border-active !border-b-transparent text-text-active' : '!border-b-transparent text-text-primary'}`}
	>{label}
	<slot />
</a>
