<script lang="ts">
	import Card from 'components/Card/Card.svelte';
</script>

<div class="flex flex-col gap-2">
	<p class="text-text-primary">// Work experience</p>
	<div class="flex flex-wrap gap-5">
		<Card
			title="Frontend Engineer"
			descrription="Orderfaz"
			additionalDescription="Jul2023 - Present"
			skills={['next', 'vue']}
		/>
		<Card
			title="Junior Frontend Engineer"
			descrription="Orderfaz"
			additionalDescription="Jul2022 - Jul2023"
			skills={['vue']}
		/>
		<Card
			title="Frontend Developer Intern"
			descrription="KMPlus"
			image="https://learningcenter.pmli.co.id/files/partner/500/1664953315_633d2be35a545.png"
			additionalDescription="Apr2022 - Jul2022"
			skills={['react']}
		/>
	</div>
</div>
