<script>
	import { current } from './store';

	export let i;

	let danceName = [
		'Flying Dinosaur',
		'Cyclist',
		'Dancing Robot',
		'Dragon Fire',
		'Flying Fish',
		'Horse',
		'Emperor Penguin',
		'Enormous Elephant',
		'Rainbow Frog',
		'Dancing Monkey'
	];
</script>

<button
	class="card bg-neutral-800/30 p-1"
	on:click={() => {
		$current = `Dance ${i + 1} ${danceName[(i % danceName.length) - 1]}`.toUpperCase();
	}}
>
	<!-- <div class="text-xs text-white">hello world!</div> -->
	<img src={`/image${(i % 6) + 1}.png`} class="h-full w-full" alt="" />
</button>

<style>
	.card {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		@apply absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-md border border-neutral-500  shadow-sm;
	}

	.card:hover {
		@apply bg-neutral-500/30 shadow-md;
	}
</style>
