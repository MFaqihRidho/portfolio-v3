<script>
	export let label;
	let isExpand = true;

	const handleToggle = () => {
		isExpand = !isExpand;
	};
</script>

<button
	on:click={handleToggle}
	type="button"
	class={`h-11 border-border-primary ${isExpand ? 'text-text-active' : '!text-text-primary'} hover:text-text-active flex w-full border-b items-center gap-1 px-3`}
>
	<i
		class={`${isExpand ? 'rotate-90' : ''} ri-arrow-right-s-fill text-xl transition-transform duration-100`}
	></i>
	<p>{label}</p>
</button>

{#if isExpand}
	<slot></slot>
{/if}
