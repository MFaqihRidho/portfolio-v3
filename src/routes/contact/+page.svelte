<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Accordion from 'components/Accordion/Accordion.svelte';

	let activeTab = $page.url.hash === '#interest' ? 'interest' : 'bio';
</script>

<div
	class="h-full flex lg:flex-row flex-col overflow-y-auto lg:overflow-hidden divide-border-primary divide-x w-full flex-1"
>
	<div class="md:min-w-64 md:max-w-64 w-full h-max flex flex-col md:gap-0 gap-1">
		<Accordion label="contacts">
			<div
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				class="px-4 py-3 text-text-primary border-b border-border-primary flex flex-col gap-2"
			>
				<a
					href="mailto:mfaqihridhoo@gmail.com"
					class={`w-full flex gap-2 items-center hover:text-text-active`}
				>
					<i class="ri-mail-fill"></i>
					<div>mfaqihridhoo@gmail.com</div>
				</a>
			</div>
		</Accordion>
		<Accordion label="find-me-also-in">
			<div
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				class="px-4 py-3 text-text-primary border-b border-border-primary flex flex-col gap-2"
			>
				<a
					href="https://www.youtube.com/@mfaqihridho"
					class={`w-full flex gap-2 items-center hover:text-text-active`}
					target="_blank"
				>
					<i class="ri-external-link-line"></i>
					Youtube Channel
				</a>
				<a
					href="https://www.linkedin.com/in/muhammad-faqih-ridho/"
					class={`w-full flex gap-2 items-center hover:text-text-active`}
					target="_blank"
				>
					<i class="ri-external-link-line"></i>
					Linkedin
				</a>
				<a
					href="https://www.instagram.com/mfaqihridho/"
					class={`w-full flex gap-2 items-center hover:text-text-active`}
					target="_blank"
				>
					<i class="ri-external-link-line"></i>
					Instagram
				</a>
			</div>
		</Accordion>
	</div>
	<div class="flex-grow flex">
		<div
			class="w-full h-full grid divide-y md:divide-y-0 md:divide-x divide-border-primary md:grid-cols-2"
		>
			<div class="h-full w-full py-5 flex items-center justify-center">
				<div class="w-full h-fit flex flex-col gap-5 max-w-[300px]">
					<div class="flex flex-col gap-1">
						<label class="text-text-primary" for=""> _name: </label>
						<input
							class="w-full px-3 py-2 h-10 rounded-lg outline-none text-base bg-[#011221] border focus:ring-2 focus:ring-text-primary/50 focus:border-text-primary border-border-primary text-text-primary"
							type="text"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label class="text-text-primary" for=""> _email: </label>
						<input
							class="w-full px-3 py-2 h-10 rounded-lg outline-none text-base bg-[#011221] border focus:ring-2 focus:ring-text-primary/50 focus:border-text-primary border-border-primary text-text-primary"
							type="text"
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label class="text-text-primary" for=""> _message: </label>
						<textarea
							class="w-full px-3 py-2 rounded-lg outline-none text-base bg-[#011221] border focus:ring-2 focus:ring-text-primary/50 focus:border-text-primary border-border-primary text-text-primary"
						/>
					</div>

					<button
						class="bg-[#1C2B3A] text-white text-sm w-fit px-3 py-2.5 rounded-lg"
						on:click={() => {}}
					>
						submit-message
					</button>
				</div>
			</div>
			<div class="h-full w-full"></div>
		</div>
	</div>
</div>
