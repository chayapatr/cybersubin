<script>
	import Figure from './Figure.svelte';
	import { openDialog, current } from '$lib/store';

	let img = false;
	let opacity = 0;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed left-0 top-0 z-[120] flex h-[100svh] w-screen items-center justify-center bg-black/80 p-4"
>
	<div
		class="justfy-center glass items-between relative flex h-full w-full max-w-4xl flex-col gap-4 rounded-md border border-neutral-800 bg-neutral-900 p-2 text-white shadow-md lg:aspect-video lg:h-auto lg:w-3/4 lg:flex-row"
	>
		<div class="relative h-full overflow-hidden rounded-md bg-black xl:aspect-[3/4]">
			<div
				class={`pointer-events-none absolute left-0 top-0 min-h-full min-w-full`}
				style={`opacity: ${opacity}%;`}
			>
				<img src={`/original/${$current}.jpg`} class="min-h-full min-w-full object-cover" alt="" />
			</div>
			<Figure i={+$current} />
		</div>
		<div class="flex h-full flex-col gap-2">
			<!-- <input type="range" bind:value={i} min="1" max="59" /> -->
			<h3 class="text-xl">Dance {$current}</h3>
			<div>
				<!-- <div
					on:click={() => {
						img = !img;
					}}
					class={`relative flex aspect-[5/3] h-8 items-end ${img ? 'justify-end' : ''} rounded-full border p-1`}
				>
					<div class="aspect-square h-full rounded-full bg-white"></div>
				</div> -->
				<input type="range" bind:value={opacity} min="0" max="100" />
			</div>
		</div>
		<div
			class="absolute right-0 top-0 m-2 cursor-pointer text-white hover:font-bold"
			on:click={() => {
				$openDialog = false;
			}}
		>
			[x]
		</div>
	</div>
</div>
