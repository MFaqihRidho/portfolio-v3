<script>
	import Card from 'components/Card/Card.svelte';
</script>

<div class="flex flex-col gap-2">
	<p class="text-text-primary">// Interest</p>
	<div class="flex lg:flex-row flex-col flex-wrap gap-5">
		<Card
			image="/cyberpunk.webp"
			title="Gaming"
			explanation="Cyberpunk 2077 is the best game, if you don't agree then you have a bad taste."
			skills={[]}
		/>
		<Card
			image="/badminton.webp"
			title="Badminton"
			explanation="I'm bad at it so I have to work hard to get better at badminton."
			skills={[]}
		/>
		<Card
			image="/frontend.webp"
			title="Frontend Development"
			explanation="I love convert cool design into code."
			skills={[]}
		/>
	</div>
</div>
