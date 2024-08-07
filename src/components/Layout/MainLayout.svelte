<script>
	import Navbar from 'components/Nav/Navbar.svelte';
	import Footer from 'components/Footer/Footer.svelte';

	let isExpand = false;
</script>

<div
	class="min-h-screen min-w-screen h-full w-full bg-bg-secondary px-3 py-5 md:p-16 flex flex-col"
>
	<div
		class="w-full h-full rounded-lg border-border-primary border flex justify-between flex-col bg-bg-primary flex-1"
	>
		<Navbar on:toggle={() => (isExpand = !isExpand)} {isExpand} />
		<slot />
		<Footer />
	</div>
</div>
