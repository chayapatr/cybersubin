<script>
	import Past from '$lib/sections/Past.svelte';
	import Present from '$lib/sections/Present.svelte';
	import Present2 from '$lib/sections/Present2.svelte';
	import Future from '$lib/sections/Future.svelte';
	import About from '$lib/sections/About.svelte';
	import Dialog from '$lib/Components/Dialog.svelte';

	import { onMount } from 'svelte';
	import { openDialog } from '$lib/store';

	let current = '';

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
					// console.log(id);
					current = id.split('-').at(0) || '';
				}
			});
		});

		['#past', '#present', '#future', '#about'].forEach((id) => {
			const element = document.querySelector(id);
			if (element) observer.observe(element);
		});
	});
</script>

{#if $openDialog}
	<div class="fixed left-0 top-0 z-[100] h-[100dvh] w-screen">
		<Dialog />
	</div>
{/if}

<div class="flex h-[100svh] flex-col bg-black text-white">
	<nav class="w-full border-b border-y-white text-center font-bold">
		<div class="divide-x-white z-50 grid w-full grid-cols-4 divide-x [&>a]:p-2">
			<a href="#past" class="hover:cursor-pointer hover:bg-gold">Past</a>
			<a href="#present" class="hover:cursor-pointer hover:bg-orange">Present</a>
			<a href="#future" class="hover:cursor-pointer hover:bg-red">Future</a>
			<a href="#about" class="hover:cursor-pointer hover:bg-neutral-800">About</a>
		</div>
	</nav>
	<div class="flex h-full flex-col justify-between gap-16 p-6 md:items-center md:justify-center">
		<div>
			<div class="mt-12 text-[5rem] font-bold leading-none sm:text-8xl md:mt-0">
				<h1>Cyber</h1>
				<h1>Subin</h1>
			</div>
			<h4 class="text-4xl">Open Lab</h4>
		</div>
		<h5 class="max-w-[12rem] text-base md:max-w-sm md:text-center md:text-xl">
			Evolving Cultural Heritage through Technology
		</h5>
	</div>
	<div class="absolute bottom-0 right-0 p-4 md:p-6">
		<div class="divide-x-white flex rounded-full text-lg md:text-xl">
			<div
				class="rounded-l-full border border-r-[0.5px] border-white px-3 hover:bg-white hover:text-black"
			>
				ก
			</div>
			<div
				class="rounded-r-full border border-l-[0.5px] border-white px-3 hover:bg-white hover:text-black"
			>
				a
			</div>
		</div>
	</div>
</div>

<div class="hero bg-black text-white">
	<div class="grid w-full divide-y text-sm md:grid-cols-3 md:gap-y-12 md:divide-y-0 md:text-base">
		{#each [['Past', '1924'], ['Present', '2017'], ['Future', '2024']] as text, i}
			<div
				class="flex aspect-video w-full flex-col items-center justify-between overflow-hidden md:aspect-[16/10]"
			>
				<div class="relative aspect-video w-full">
					<div class="aspect-video opacity-90">
						<img
							src={`/intro/${text[0].toLowerCase()}.png`}
							class="h-full w-full object-cover"
							alt=""
						/>
					</div>
					<div class="absolute bottom-0 mb-3 w-full text-center font-bold md:mb-1">
						{text[0]} <span class="md:hidden">· {text[1]}</span>
					</div>
				</div>
				<div class="hidden md:block">{text[1]}</div>
			</div>
		{/each}
	</div>

	<div class="my-10 grid gap-y-6 px-6 text-base md:p-12 md:pt-6 lg:grid-cols-3 lg:px-0">
		<div class="lg:px-8">
			<div class="mb-4 text-6xl md:text-8xl">100</div>
			<p class="max-w-sm text-2xl">years journey of choreography from culture to computer</p>
		</div>
		<div class="w-full text-balance lg:w-11/12">
			<p>
				Traditional dance forms serve as living cultural heritage, with choreographic knowledge
				transmitted through embodied practices. While digitization has enabled preservation, the
				deeper layers of tacit knowledge and improvisation remain frozen. This research introduces
				an approach to computationally formalize traditional dance knowledge as an interactive
				model, combining human dancers with virtual partners powered by computational systems
				derived from dance principles.
			</p>
		</div>
		<div class="w-full space-y-6 text-pretty lg:w-11/12">
			<p>
				A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
				established by Thai choreographer Pichet Klunchun, creating computational procedures to
				replicate the effects of the principles. This paradigm allows practitioners to interact with
				computational manifestations of ancestral choreographic knowledge, acknowledging non-Western
				knowledge systems often overlooked in colonial understandings of AI.
			</p>
			<div>
				<a href="https://cybersubin.media.mit.edu" class="btn">Learn More</a>
			</div>
		</div>
	</div>
</div>

<div class="relative" id="scroll">
	<div
		class="sticky left-0 top-[100%] z-50 -mb-10 mt-[100dvh] hidden w-[100dvh] -rotate-90 border-b border-b-white bg-neutral-800 font-bold text-white xl:block"
		style="transform-origin: top left;"
	>
		<div class="divide-x-white grid w-full grid-cols-4 divide-x">
			<a
				href="#about"
				class={`w-full p-2 text-center hover:bg-black ${current === 'about' ? 'bg-black' : ''}`}
				>About</a
			>
			<a
				href="#future"
				class={`w-full p-2 text-center hover:bg-red ${current === 'future' ? 'bg-red' : ''}`}
				>Future</a
			>
			<a
				href="#present"
				class={`w-full p-2 text-center hover:bg-orange ${current === 'present' ? 'bg-orange' : ''}`}
			>
				Present
			</a>
			<a
				href="#past"
				class={`w-full p-2 text-center hover:bg-gold ${current === 'past' ? 'bg-gold' : ''}`}
				>Past</a
			>
		</div>
	</div>

	<div id="past">
		<Past />
	</div>

	<div id="present">
		<Present />
		<Present2 />
	</div>

	<div id="future">
		<Future />
	</div>

	<div id="about">
		<About />
	</div>

	<nav
		class="sticky bottom-0 z-50 w-full border-t border-y-white bg-black text-center font-bold text-white xl:hidden"
	>
		<ul class="divide-x-white grid w-full grid-cols-4 divide-x [&>li]:p-2">
			<li class={`hover:cursor-pointer  ${current === 'past' ? 'bg-gold' : ''}`}>
				<a href="#past">Past</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'present' ? 'bg-orange' : ''}`}>
				<a href="#present">Present</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'future' ? 'bg-red' : ''}`}>
				<a href="#future">Future</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'about' ? 'bg-black' : ''}`}>
				<a href="#about">About</a>
			</li>
		</ul>
	</nav>
</div>

<style>
	#scroll {
		scroll-snap-type: y mandatory;
	}
</style>
