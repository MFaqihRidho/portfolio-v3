<script>
	import SnakeGame from 'components/Game/SnakeGame.svelte';
</script>

<div
	class="h-full w-full flex md:flex-row gap-10 flex-col p-5 md:px-20 2xl:px-72 items-center justify-center md:justify-between"
>
	<!-- intro -->
	<div class="flex flex-col md:gap-24 w-full">
		<div class="flex flex-col gap-1 md:!py-0 pb-5">
			<p class="text-text-secondary text-lg">Hi all. I am</p>
			<p class="text-text-secondary text-6xl">M.Faqih Ridho</p>
			<p class="text-[#4D5BCE] text-xl md:text-3xl">> Front-end engineer</p>
		</div>
		<div class="flex flex-col gap-1">
			<p class="text-text-primary">// you can also see me as a streamer</p>
			<p class="text-text-active">
				<span class="text-[#4D5BCE]">const</span> <span class="text-[#43D9AD]">youtubelink</span> =
				“<a
					class="text-[#E99287] underline"
					target="_blank"
					href="https://www.youtube.com/@mfaqihridho">https://www.youtube.com/@mfaqihridho</a
				>”
			</p>
		</div>
	</div>

	<!-- image and game -->
	<div class="relative w-full flex items-center justify-center">
		<div
			class="h-64 w-64 absolute -top-10 z-0 rounded-full right-56 bg-[#43D9AD] blur-[130px]"
		></div>
		<div
			class="h-64 w-64 absolute top-10 z-0 rounded-full -right-14 bg-[#4D5BCE] blur-[130px]"
		></div>
		<div
			class="md:w-[500px] md:h-[420px] w-full md:p-7 px-3 py-7 bg-gradient-to-br from-[#43D9AD]/30 to-[#4D5BCE]/30 backdrop-blur-sm rounded-lg z-[999999]"
		>
			<SnakeGame />
		</div>
	</div>
</div>
