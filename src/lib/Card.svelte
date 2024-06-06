<script>
	export let i;
</script>

<div class="card bg-neutral-800/30 p-1">
	<!-- <div class="text-xs text-white">hello world!</div> -->
	<img src={`/image${(i % 6) + 1}.png`} class="h-full w-full" alt="" />
</div>

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
