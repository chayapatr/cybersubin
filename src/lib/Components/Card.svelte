<script>
	import { code, current, openDialog } from '../store';

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
	class={`${i !== 59 ? 'card border border-neutral-500 bg-neutral-800/30 opacity-50 ' : 'card-none'}`}
	disabled={i === 59}
	on:mouseenter={() => {
		if (i !== 59) $current = i + 1; // `Dance ${i + 1} ${danceName[(i % danceName.length) - 1]}`.toUpperCase();
	}}
	on:click={() => {
		$current = i + 1;
		$openDialog = true;
	}}
>
	<!-- {#if $code}
			<div class="w-[150%] -translate-x-3 lg:-translate-x-5">
				<img src={`/code/${i + 1}.jpg`} alt="" />
			</div>
		{:else} -->

	{#if i !== 59}
		<img src={`/original/${i + 1}.jpg`} alt="" />
	{/if}
</button>

<style>
	.card {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		@apply absolute left-0 top-0 h-full w-full overflow-hidden rounded-md shadow-sm;
	}

	.card-none {
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		@apply absolute left-0 top-0 h-full w-full overflow-hidden rounded-md shadow-sm;
	}

	.card:hover {
		@apply bg-neutral-500/30 opacity-100 shadow-md;
	}
</style>
