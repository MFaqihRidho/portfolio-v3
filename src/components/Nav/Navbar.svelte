<script>
	import NavItem from './NavItem.svelte';
</script>

<nav
	class="w-full flex items-center border-b justify-between border-border-primary divide-x divide-border-primary"
>
	<div
		class="hidden md:flex items-center divide-x divide-border-primary border-r border-border-primary"
	>
		<div class="text-text-primary w-72 px-8 py-3.5">m.faqih-ridho</div>
		<NavItem path="/" label="_hello" />
		<NavItem path="/about" label="_about-me" />
		<NavItem path="/project" label="_projects" />
	</div>
	<NavItem path="/contact" label="_contact-me" />
</nav>
