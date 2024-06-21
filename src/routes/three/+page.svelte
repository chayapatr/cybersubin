<script>
	import Figure from '$lib/Components/Figure.svelte';
	let i = 0;
</script>

<!-- <div class="aspect-video h-[100svh] w-screen">
	<Figure />
</div> -->

<input type="range" bind:value={i} />
{i}
