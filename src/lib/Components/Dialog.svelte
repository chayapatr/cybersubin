<script>
	import Figure from './Figure.svelte';
	import { openDialog, current, slider } from '$lib/store';
	import { posture } from '$lib/59';

	let img = false;
	let opacity = 0;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed left-0 top-0 z-[120] flex h-[100dvh] w-screen items-center justify-center bg-black/80 p-4"
>
	<div
		class="glass relative grid max-h-full w-full min-w-[50%] max-w-4xl gap-4 rounded-md border border-neutral-800 bg-neutral-900 p-4 text-white shadow-md lg:h-auto lg:flex-row"
	>
		<h3 class="w-full text-wrap pr-10 text-xl">
			<span class="font-bold text-gold">Pose {$current}</span> · {posture[$current - 1].english}
			({posture[$current - 1].thai})
		</h3>
		<div class="w-full gap-2 overflow-hidden md:flex md:flex-row">
			<div
				class="relative aspect-[3/4] max-h-full w-full overflow-hidden rounded-md border border-neutral-700 bg-black hover:cursor-grab"
			>
				{#key $current}
					<Figure i={+$current} seek={$slider} />
					{#if !img}
						<div class="absolute bottom-0 left-0 z-50 mb-2 h-8 w-full px-4">
							<input
								type="range"
								name=""
								bind:value={$slider}
								class="mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-500 accent-neutral-200"
								id=""
							/>
						</div>
					{/if}
				{/key}
				{#if img}
					<div class="absolute right-0 top-0 aspect-[3/4] h-full w-full md:hidden">
						<img
							src={`/original/${$current}.jpg`}
							class="min-h-full min-w-full object-cover"
							alt=""
						/>
						<div class="absolute left-0 top-0 h-full w-full" style={`opacity: ${opacity}%`}>
							<img
								src={`/diagram/${$current}.png`}
								class="min-h-full min-w-full object-cover"
								alt=""
							/>
						</div>
						<div class="absolute bottom-0 left-0 z-50 mb-2 h-8 w-full px-4">
							<input
								type="range"
								name=""
								bind:value={opacity}
								class="mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-500 accent-neutral-200"
								id=""
							/>
						</div>
					</div>
				{/if}
			</div>
			<div
				class="relative hidden aspect-[3/4] w-full overflow-hidden rounded-md border border-neutral-700 bg-black md:block"
			>
				<img src={`/original/${$current}.jpg`} class="min-h-full min-w-full object-cover" alt="" />
				<div class="absolute left-0 top-0 h-full w-full" style={`opacity: ${opacity}%`}>
					<img src={`/diagram/${$current}.png`} class="min-h-full min-w-full object-cover" alt="" />
				</div>
				<div class="absolute bottom-0 left-0 z-50 mb-2 h-8 w-full px-4">
					<input
						type="range"
						name=""
						bind:value={opacity}
						class="mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-500 accent-neutral-200"
						id=""
					/>
				</div>
			</div>
			<div class="mt-3 flex items-center justify-center gap-2 md:hidden">
				<div>3D</div>
				<div
					class={`flex aspect-[3/2] h-8 rounded-full border p-1 ${img ? 'justify-end' : ''}`}
					on:click={() => {
						img = !img;
					}}
				>
					<div class="flex aspect-square h-full rounded-full bg-white"></div>
				</div>
				<div>Image</div>
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
