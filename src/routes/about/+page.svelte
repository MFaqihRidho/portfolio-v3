<script>
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Accordion from 'components/Accordion/Accordion.svelte';

	let activeTab = $page.url.hash === '#interest' ? 'interest' : 'bio';
</script>

<div class="h-full flex divide-border-primary divide-x w-full flex-1">
	<div class="w-72 h-max">
		<Accordion label="personal-info">
			<div
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				class="px-4 py-3 text-text-primary border-b border-border-primary flex flex-col gap-2"
			>
				<button
					on:click={() => {
						goto('/about');
						activeTab = 'bio';
					}}
					class={`w-full flex gap-2 items-center ${$page.url.hash === '' ? '!text-text-active' : ''}`}
				>
					<i class="ri-user-fill -mt-1 text-[#E99287]"></i>
					<div>bio</div>
				</button>
				<button
					on:click={() => {
						goto('/about#interest');
						activeTab = 'interest';
					}}
					class={`w-full flex gap-2 items-center ${$page.url.hash === '#interest' ? '!text-text-active' : ''}`}
				>
					<i class="ri-heart-fill -mt-1 text-[#43D9AD]"></i>
					<div>interest</div>
				</button>
			</div>
		</Accordion>
		<Accordion label="contact">
			<div
				transition:slide={{ duration: 300, easing: quintOut, axis: 'y' }}
				class="px-4 py-3 text-text-primary border-b border-border-primary flex flex-col gap-2"
			>
				<a href="mailto:mfaqihridhoo@gmail.com" class={`w-full flex gap-2 items-center`}>
					<i class="ri-mail-fill"></i>
					<div>mfaqihridhoo@gmail.com</div>
				</a>
			</div>
		</Accordion>
	</div>
	<div></div>
</div>
