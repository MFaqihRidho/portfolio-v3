<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const dispatch = createEventDispatcher();
	import NavItem from './NavItem.svelte';
	export let isExpand;
	const handleToggleNav = () => {
		dispatch('toggle');
	};
</script>

<nav
	class="w-full flex items-center border-b justify-between border-border-primary lg:divide-x divide-border-primary"
>
	<!-- mobile -->
	<div class="text-text-primary w-72 lg:hidden px-5 py-3.5">m.faqih-ridho</div>
	<button on:click={handleToggleNav} class="px-5 lg:hidden"
		><i class={`${isExpand ? 'ri-close-large-line' : 'ri-menu-line'} text-text-primary text-2xl`}
		></i></button
	>
	<!-- desktop -->
	<div
		class="hidden lg:flex !border-l-0 items-center divide-x divide-border-primary !border-r border-border-primary"
	>
		<div class="text-text-primary lg:w-72 px-8 py-3.5">m.faqih-ridho</div>
		<NavItem path="/" label="_hello" />
		<NavItem path="/about" label="_about-me" />
		<NavItem path="/contact" label="_contact-me" />
	</div>
</nav>
{#if isExpand}
	<div
		transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
		class="flex lg:hidden flex-col w-full items-center divide-y border-b divide-border-primary border-r border-border-primary"
	>
		<NavItem on:click={handleToggleNav} path="/" label="_hello" />
		<NavItem on:click={handleToggleNav} path="/about" label="_about-me" />
		<NavItem on:click={handleToggleNav} path="/project" label="_projects" />
		<NavItem on:click={handleToggleNav} path="/contact" label="_contact-me" />
	</div>
{/if}
