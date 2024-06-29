<script lang="ts">
	import Figure from './Figure.svelte';
	import { openElementDialog, element, slider } from '$lib/store';
	import { elements } from '../elements';
	let img = false;
	let state = 'img';

	const pose = 1;
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
			<span class="font-bold text-gold">{elements[$element].english}</span> · {elements[$element]
				.thai}
		</h3>
		<div class="w-full gap-4 overflow-hidden md:flex md:flex-row">
			<div
				class={`
				relative aspect-[3/4] max-h-full w-full rounded-md border border-neutral-700 bg-black hover:cursor-grab
				${state === 'detail' ? 'overflow-scroll' : 'overflow-hidden'}`}
			>
				{#key $element}
					<Figure i={pose} seek={$slider} />
					<div class="absolute bottom-0 left-0 z-50 mb-2 hidden h-8 w-full px-4 lg:flex">
						<input
							type="range"
							name=""
							bind:value={$slider}
							class="mb-6 h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-500 accent-neutral-200 lg:hidden"
							id=""
						/>
					</div>
					{#if state === ''}
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
				{#if state === 'img'}
					<div class="absolute right-0 top-0 aspect-[3/4] h-full w-full bg-black md:hidden">
						<img
							src={`/6-elements-shadow/${$element}.jpg`}
							class="min-h-full min-w-full object-contain p-4"
							alt=""
						/>
					</div>
				{/if}
				{#if state === 'detail'}
					<div
						class="absolute right-0 top-0 mb-4 aspect-[3/4] h-full w-full bg-black p-3 md:hidden"
					>
						<div class="h-3 w-full">{elements[$element].detail}</div>
					</div>
				{/if}
			</div>
			<div
				class="relative hidden aspect-[3/4] h-full w-full flex-col gap-4 overflow-hidden md:flex"
			>
				<div
					class="flex aspect-square w-full items-center justify-center overflow-hidden rounded-md border border-neutral-700 bg-black"
				>
					<img
						src={`/6-elements-shadow/${$element}.jpg`}
						class="h-full object-contain p-6"
						alt=""
					/>
				</div>
				<div class="p-1 text-sm">
					{elements[$element].detail}
				</div>
			</div>
			<div class="mt-3 border-l border-orange pl-2 text-xs font-bold text-orange md:hidden">
				Pichet Klunchun performing Movement {elements[$element].pose}
			</div>
			<div class="mt-3 flex w-full items-center justify-between gap-2 md:hidden">
				<!-- <div>3D</div>
				<div
					class={`flex aspect-[3/2] h-8 rounded-full border p-1 ${img ? 'justify-end' : ''}`}
					on:click={() => {
						img = !img;
					}}
				>
					<div class="flex aspect-square h-full rounded-full bg-white"></div>
				</div>
				<div>Diagram</div> -->
				<button
					class="btn w-full"
					on:click={() => {
						state = 'img';
					}}>Diagram</button
				>
				<button
					class="btn w-full"
					on:click={() => {
						state = '';
					}}>3D</button
				>
				<button
					class="btn w-full"
					on:click={() => {
						state = 'detail';
					}}>Detail</button
				>
			</div>
		</div>
		<div class="hidden border-l border-orange pl-2 font-bold text-orange md:block">
			Pichet Klunchun performing Movement {elements[$element].pose}
		</div>
		<div
			class="absolute right-0 top-0 m-2 cursor-pointer text-white hover:font-bold"
			on:click={() => {
				$openElementDialog = false;
			}}
		>
			[x]
		</div>
	</div>
</div>
