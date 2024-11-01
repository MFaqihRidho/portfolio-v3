<script lang="ts">
	export let title: string = 'Project 1';
	export let descrription: string = 'ui_animation';
	export let additionalDescription: string = '';
	export let skills: Array<String> = ['react'];
	export let image: string = 'https://blog.orderfaz.com/blog/content/images/2023/06/orderfaz-1.png';
</script>

<div class="w-full max-w-96">
	<p>
		<span class="text-text-highlight font-bold">{title}</span>
		<span class="text-text-primary">// {descrription}</span>
	</p>
	{#if additionalDescription}
		<p class="text-[#43D9AD]">{additionalDescription}</p>
	{/if}

	<div
		class="w-full mt-3 bg-[#011221] border border-border-primary rounded-xl relative overflow-hidden"
	>
		<img src={image} alt="" class="object-cover bg-white w-full h-40" />
		<div class="absolute top-1 right-2">
			{#if skills.includes('next')}
				<i class="ri-nextjs-fill text-2xl"></i>
			{/if}
			{#if skills.includes('vue')}
				<i class="ri-vuejs-fill text-xl text-[#41B883]"></i>
			{/if}
			{#if skills.includes('react')}
				<i class="ri-reactjs-fill text-xl text-[#61DBFB]"></i>
			{/if}
		</div>
		<div class="p-5 border-t border-border-primary text-text-primary">
			<p>Duis aute irure dolor in velit esse cillum dolore.</p>
		</div>
	</div>
</div>
