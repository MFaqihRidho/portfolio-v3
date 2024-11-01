<script>
	let aboutMe = `/**
* About me
* Hi there! I'm a passionate and highly motivated
* Frontend Engineer who loves building websites 
* and applications that are easy and enjoyable to
* use. Imagine a shop online where sellers can
* easily manage their products and customers –
* that's the kind of user experience I strive to
* create. I have 2 years of expereince in Frontend
* Development and i'm skilled in using the latest
* development tools like Vue.js and Next.js.
*/`;
</script>

<div class="pl-3 w-full h-full flex flex-col overflow-x-auto flex-1">
	<div class="h-full flex-1 flex gap-7 w-full">
		<div>
			{#each { length: 12 } as _, idx}
				<p class="text-text-primary">{idx + 1}</p>
			{/each}
		</div>
		<textarea
			class="min-w-[500px] h-full bg-transparent text-text-primary flex-1 resize-none"
			value={aboutMe}
			disabled
		></textarea>
	</div>
</div>
