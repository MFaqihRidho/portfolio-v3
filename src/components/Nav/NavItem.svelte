<script>
	import { page } from '$app/stores';
	export let path;
	export let label;
</script>

<a
	href={path}
	class={`px-8 py-3.5 border-b-[3px] hover:text-text-active ${$page.url.pathname === path ? '!border-b-border-active text-text-active' : '!border-b-transparent text-text-primary'}`}
	>{label}
	<slot />
</a>
