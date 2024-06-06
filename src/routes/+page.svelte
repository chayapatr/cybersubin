<script>
	import { onMount } from 'svelte';
	import simpleParallax from 'simple-parallax-js?client';
	onMount(() => {
		let image = document.getElementById('image');
		new simpleParallax(image);
	});
</script>

<div class="hero" id="first">
	<div
		class="absolute bottom-0 left-0 p-10 text-[10rem] font-extralight leading-none mix-blend-difference"
	>
		<h1>CYBER</h1>
		<h1 class="ml-24">SUBIN</h1>
	</div>
	<div class="bg absolute -z-10 h-[100svh] w-screen overflow-hidden" id="scene">
		<img src="cyber.jpg" alt="" id="image" class="h-full w-full object-cover" />
	</div>
</div>

<div class="hero bg-neutral-950" id="past">
	<div class="sticky right-0 top-0 flex justify-end">
		<div class="glass m-6 p-1">SECTION I: PAST</div>
	</div>
	<div
		class="absolute bottom-0 left-0 p-10 text-[10rem] font-extralight leading-none mix-blend-difference"
	>
		<h1>59 MAEBOT</h1>
	</div>
	<div class="absolute bottom-0 right-0 m-6">
		<a href="#present">↓</a>
	</div>
</div>

<div class="hero bg-neutral-950" id="present">
	<div class="sticky right-0 top-0 flex justify-end">
		<div class="glass m-6 p-1">SECTION II: PRESENT</div>
	</div>
	<div
		class="absolute bottom-0 left-0 p-10 text-[10rem] font-extralight leading-none mix-blend-difference"
	>
		<h1>6 ELEMENTS</h1>
	</div>
	<div class="absolute bottom-0 right-0 m-6">
		<a href="#future">↓</a>
	</div>
</div>

<div class="hero bg-neutral-950" id="future">
	<div class="sticky right-0 top-0 flex justify-end">
		<div class="glass m-6 p-1">SECTION III: FUTURE</div>
	</div>
	<div
		class="absolute bottom-0 left-0 p-10 text-[10rem] font-extralight leading-none mix-blend-difference"
	>
		<h1>CYBERSUBIN</h1>
	</div>
	<div class="absolute bottom-0 right-0 m-6">
		<a href="#first">↑</a>
	</div>
</div>

<style>
	.hero {
		@apply relative h-[100svh] text-white;
	}
	.glass {
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
		@apply border border-neutral-600 bg-neutral-800/60 shadow-sm;
	}
</style>
