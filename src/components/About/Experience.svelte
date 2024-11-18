<script lang="ts">
	import Card from 'components/Card/Card.svelte';
</script>

<div class="flex flex-col gap-2">
	<p class="text-text-primary">// Work experience</p>
	<div class="flex lg:flex-row flex-col flex-wrap gap-5">
		<Card
			title="Frontend Engineer"
			description="Orderfaz"
			image="/orderfaz.webp"
			additionalDescription="Jul2023 - Present"
			skills={['next', 'vue']}
		/>
		<Card
			title="Junior Frontend Engineer"
			description="Orderfaz"
			image="/orderfaz.webp"
			additionalDescription="Jul2022 - Jul2023"
			skills={['vue']}
		/>
		<Card
			title="Frontend Developer Intern"
			description="KMPlus"
			image="/kmplus.webp"
			additionalDescription="Apr2022 - Jul2022"
			skills={['react']}
		/>
	</div>
</div>
