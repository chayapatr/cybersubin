<script lang="ts">
	import { openDialog } from '$lib/store';
	import { onMount } from 'svelte';
	let points: HTMLElement, text: HTMLElement;

	// let lines: { x: number; y: number }[][] = [];

	// const length = (x1: number, x2: number, y1: number, y2: number) => {
	// 	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	// };

	let current = '';

	onMount(() => {});
</script>

<div class="absolute left-0 top-0 flex h-full w-screen items-center justify-center md:-ml-10">
	<!-- <div class="relative">
		<img src="/6-elements.png" class="w-[80vw] md:h-[50vh] md:w-auto" alt="" />
		<div class="absolute left-0 top-0 h-full w-full" id="asf">
			<div class="relative h-full w-full" bind:this={points}>
				<div class=" absolute left-[15%] top-[12%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[53%] top-[5%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[15%] top-[48%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[15%] top-[75%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[72%] top-[65%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[51%] top-[18%] size-5 bg-violet-500"></div>
			</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 h-full w-screen">
		<div class="relative h-full w-full" bind:this={text}>
			<div class="absolute left-[24%] top-[24%] text-white">Axis Point</div>
			<div class="absolute left-[70%] top-[20%] text-white">Shifting Relations</div>
			<div class="absolute left-[10%] top-[60%] text-white">Synchronous Limbs</div>
			<div class="absolute left-[12%] top-[80%] text-white">Circle & Curves</div>
			<div class="absolute left-[70%] top-[70%] text-white">External Body Space</div>
			<div class="absolute left-[75%] top-[50%] text-white">Energy</div>
		</div>
	</div> -->
	<div class="relative">
		<!-- <img src="/6-elements-lg.png" alt="" /> -->
		<img class="" src="/6-elements/body.png" alt="" />
		<div class="absolute left-0 top-0 z-[100] h-full w-full">
			{#each ['axis', 'relation', 'limb', 'circle', 'space', 'energy'] as x}
				<img
					style={`opacity: ${current === x || !current ? '100' : '10'}%`}
					class="absolute left-0 top-0 h-full w-full transition-all"
					src={`/6-elements/${x}.png`}
					alt=""
				/>
			{/each}
			<img
				class="absolute left-0 top-0 hidden h-full w-full lg:block"
				src="/6-elements/line.png"
				alt=""
			/>
		</div>
		<div class="absolute left-0 top-0 z-[150] hidden h-full w-full lg:block">
			<div class="relative h-full w-full">
				{#each [['axis', 'Axis Point', 'top-[-6%] left-[7%]'], ['relation', 'Shifting Relations', '-top-[6%] left-[67%]'], ['limb', 'Synchronic Limbs', 'top-[32%] left-[0%]'], ['circle', 'Circle & Curves', 'top-[85%] left-[5%]'], ['space', 'External Body Space', 'top-[85%] left-[76%]'], ['energy', 'Energy', 'top-[59%] left-[75%]']] as x}
					<button
						on:mouseenter={() => (current = x[0])}
						on:mouseleave={() => (current = '')}
						on:click={() => {
							$openDialog = true;
						}}
						class="absolute {x[2]} text-white hover:font-bold">{x[1]}</button
					>
				{/each}
			</div>
			<!-- <div class="relative h-full w-full">
				<div class="absolute -top-[6%] left-[7%] text-white">Axis Point</div>
				<div class="absolute -top-[6%] left-[67%] text-white">Shifting Relations</div>
				<div class="absolute left-[0%] top-[32%] text-white">Synchronous Limbs</div>
				<div class="absolute left-[5%] top-[85%] text-white">Circle & Curves</div>
				<div class="absolute left-[76%] top-[85%] text-white">External Body Space</div>
				<div class="absolute left-[75%] top-[59%] text-white">Energy</div>
			</div> -->
		</div>
	</div>
</div>
