<script lang="ts">
	import { openElementDialog, element } from '$lib/store';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	// let lines: { x: number; y: number }[][] = [];

	// const length = (x1: number, x2: number, y1: number, y2: number) => {
	// 	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	// };

	let current = '';

	onMount(() => {});
</script>

<div
	class="absolute left-0 top-0 flex h-full w-screen items-center justify-center bg-black/40 md:-ml-10"
>
	<div class="relative">
		<img src="/6-elements/body.png" class="hidden xl:block" alt="" />
		<img src="/6-elements.png" class="block scale-90 p-12 lg:w-[30vw] xl:hidden" alt="" />

		<div class="absolute left-0 top-0 z-[100] hidden h-full w-full xl:block">
			{#each ['axis', 'relation', 'limb', 'circle', 'space', 'energy'] as x}
				<img
					style={`opacity: ${current === x || !current ? '100' : '10'}%`}
					class="absolute left-0 top-0 h-full w-full transition-all"
					src={`/6-elements/${x}.png`}
					alt=""
				/>
			{/each}
			<img class="absolute left-0 top-0 h-full w-full" src="/6-elements/line.png" alt="" />
		</div>
		<div class="absolute left-0 top-0 z-[400] hidden h-full w-full xl:block">
			<div class="relative h-full w-full">
				{#each [['axis', 'Axis Points', 'top-[-6%] left-[7%]'], ['relation', 'Shifting Relations', '-top-[6%] left-[67%]'], ['limb', 'Synchronic Limbs', 'top-[32%] left-[0%]'], ['circle', 'Circle & Curves', 'top-[85%] left-[5%]'], ['space', 'External Body Space', 'top-[85%] left-[76%]'], ['energy', 'Energy', 'top-[59%] left-[75%]']] as x}
					<button
						on:click={() => {
							$element = x[0];
							$openElementDialog = true;
						}}
						class="absolute {x[2]} text-white hover:font-bold">{$_(`present.6elm.${x[0]}`)}</button
					>
				{/each}
			</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 space-y-3 p-6 md:ml-12 lg:hidden">
		<h3 class="text-3xl text-orange">No. 60</h3>
		<p class="text-pretty text-white">
			{$_('present.6elm.caption')}
		</p>
	</div>
	<div
		class="absolute bottom-10 left-0 grid w-full grid-cols-2 gap-3 p-4 pb-6 md:grid-cols-3 md:pl-16 lg:bottom-0 xl:hidden"
	>
		{#each [['axis', 'Axis Points'], ['relation', 'Shifting Relations'], ['limb', 'Synchronic Limbs'], ['circle', 'Circle & Curves'], ['space', 'External Body Space'], ['energy', 'Energy']] as x}
			<button
				class="btn w-full text-white"
				on:click={() => {
					$openElementDialog = true;
					$element = x[0];
				}}>{$_(`present.6elm.${x[0]}`)}</button
			>
		{/each}
	</div>
</div>

<style>
	.btn {
		@apply min-h-14 rounded-full border border-white px-4 text-center text-sm hover:cursor-pointer hover:bg-white hover:font-bold hover:text-black;
	}
</style>
