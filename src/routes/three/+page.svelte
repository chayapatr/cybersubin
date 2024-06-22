<script>
	import Dialog from '$lib/Components/Dialog.svelte';
	import Figure from '$lib/Components/Figure.svelte';
	import { slider } from '$lib/store';
	let i = 0;
</script>

<!-- <Dialog /> -->
<div class="h-[80vh] w-screen">
	<Figure seek={$slider} />
</div>
<div class="absolute bottom-0">
	<input type="range" name="" bind:value={$slider} class="w-full" id="" />
	<input
		type="range"
		name=""
		bind:value={$slider}
		disabled
		min="1"
		max="100"
		class="w-full"
		id=""
	/>
</div>
