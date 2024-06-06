<script lang="ts">
	import { onMount } from 'svelte';
	import simpleParallax from 'simple-parallax-js?client';
	import Card from '$lib/Card.svelte';
	import Carousel from '$lib/Carousel.svelte';
	let i = 1;
	let img: HTMLElement;
	$: dance = Math.floor(i / (360 / 58)) + 1;

	let curX = 0,
		curY = 0;
	onMount(() => {
		new simpleParallax(img);
		document.addEventListener('mousemove', (e) => {
			curX = e.clientX;
			curY = e.clientY;
		});
	});

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

<section class="hero" id="first">
	<div class="absolute h-[100svh] w-screen">
		<img
			bind:this={img}
			src="cyber.jpg"
			alt=""
			id="image"
			class="h-[100svh] w-screen object-cover opacity-50"
		/>
	</div>
	<div class="absolute left-0 top-0 p-6 lg:p-10">
		<h1>CYBER</h1>
		<h1 class="ml-24">SUBIN</h1>
	</div>
</section>

<section class="bg-neutral-950 text-white" id="past">
	<div class="sticky right-0 top-0 z-40 flex justify-end">
		<div class="glass m-6 p-1">SECTION I: PAST</div>
	</div>

	<div class="hero">
		<div class="mb-8 mt-4 space-y-4 px-8 md:mt-0">
			<h3 class="font-extralight text-neutral-300">59 MAEBOT</h3>
			<div
				class="max-w-sm border-l-neutral-400 font-light text-neutral-300 lg:ml-2 lg:border-l lg:pl-3"
			>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
				consectetur adipisicing elit.
			</div>
		</div>
		<!-- <div class="absolute h-full w-full select-none overflow-hidden">
			<div class="ctn">
				<div
					class="relative h-[60svh] w-screen"
					style={`
		        transform-style: preserve-3d;
                transform: perspective(1000px) rotateX(338deg) rotateY(${-i}deg) rotateZ(8deg);`}
				>
					{#each [...Array(59)].map((n, i) => i) as n}
						<Card i={n} current={dance === n + 1} />
					{/each}
				</div>
            </div>
			</div> -->
		<div class="z-50">
			<Carousel />
		</div>
		<!-- 
		<div
			class="absolute bottom-0 flex w-screen flex-col items-start justify-center gap-8 px-8 py-4"
		>
			{#key dance}
				<div class="group hover:cursor-none">
					<h3 class="">
						{dance}
						{danceName[(dance % danceName.length) - 1]}
					</h3>
					<div
						class="fixed -mx-5 -my-5 hidden size-20 items-center justify-center rounded-full border border-white bg-white/20 group-hover:flex"
						style={`
                        backdrop-filter: blur(3px);
	                    -webkit-backdrop-filter: blur(3px);
                        top: ${curY}px;
                        left: ${curX}px;
                    `}
					>
						more
					</div>
				</div>
			{/key}
		</div> -->
	</div>
</section>

<section class="hero bg-neutral-950" id="present">
	<div class="sticky right-0 top-0 flex justify-end">
		<div class="glass m-6 p-1">SECTION II: PRESENT</div>
	</div>
	<div class="absolute bottom-0 left-0 p-10">
		<h1>6 ELEMENTS</h1>
	</div>
	<div class="absolute bottom-0 right-0 m-6">
		<a href="#future">↓</a>
	</div>
</section>

<section class="hero bg-neutral-950" id="future">
	<div class="sticky right-0 top-0 flex justify-end">
		<div class="glass m-6 p-1">SECTION III: FUTURE</div>
	</div>
	<div class="absolute bottom-0 left-0 p-10 mix-blend-difference">
		<h1>CYBER SUBIN</h1>
	</div>
	<div class="absolute bottom-0 right-0 m-6">
		<a href="#first">↑</a>
	</div>
</section>

<style>
	.hero {
		@apply relative min-h-[100svh] bg-neutral-950 text-white;
	}
	.ctn {
		-ms-overflow-style: none; /* Internet Explorer 10+ */
		scrollbar-width: none; /* Firefox */
	}
	.ctn::-webkit-scrollbar {
		display: none; /* Safari and Chrome */
	}

	.ctn {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		transform-style: preserve-3d;
	}

	/* input[type='range'] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
		width: 15rem;
	} */

	h1 {
		@apply text-[4rem] font-extralight leading-none lg:text-[10rem];
	}
	h3 {
		@apply text-[3rem] font-extralight leading-none lg:text-[6rem];
	}
</style>
