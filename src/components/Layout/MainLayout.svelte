<script>
	import Navbar from 'components/Nav/Navbar.svelte';
	import Footer from 'components/Footer/Footer.svelte';
</script>

<div class="min-h-screen min-w-screen bg-bg-secondary p-16 flex flex-col">
	<div
		class="w-full h-full rounded-lg border-border-primary border flex justify-between flex-col bg-bg-primary flex-1"
	>
		<Navbar />
		<slot />
		<Footer />
	</div>
</div>
