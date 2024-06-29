<script>
	import Hero from '$lib/sections/Hero.svelte';
	import Intro from '$lib/sections/Intro.svelte';
	import Past from '$lib/sections/Past.svelte';
	import Present from '$lib/sections/Present.svelte';
	import Present2 from '$lib/sections/Present2.svelte';
	import Future from '$lib/sections/Future.svelte';
	import About from '$lib/sections/About.svelte';
	import Dialog from '$lib/Components/Dialog.svelte';
	import ElementDialog from '$lib/Components/ElementDialog.svelte';

	import { onMount } from 'svelte';
	import { openDialog, openElementDialog } from '$lib/store';
	import { _ } from 'svelte-i18n';

	let current = '';

	onMount(() => {
		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id;
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

{#if $openElementDialog}
	<div class="fixed left-0 top-0 z-[100] h-[100dvh] w-screen">
		<ElementDialog />
	</div>
{/if}

<Hero />

<Intro />

<div class="relative" id="scroll">
	<div
		class="sticky left-0 top-[100%] z-50 -mb-10 mt-[100dvh] hidden w-[100dvh] -rotate-90 border-b border-b-white bg-neutral-800 font-bold text-white md:block"
		style="transform-origin: top left;"
	>
		<div class="divide-x-white grid w-full grid-cols-4 divide-x">
			<a
				href="#about"
				class={`w-full p-2 text-center hover:bg-black ${current === 'about' ? 'bg-black' : ''}`}
				>{$_('menu.about')}</a
			>
			<a
				href="#future"
				class={`w-full p-2 text-center hover:bg-red ${current === 'future' ? 'bg-red' : ''}`}
				>{$_('menu.future')}</a
			>
			<a
				href="#present"
				class={`w-full p-2 text-center hover:bg-orange ${current === 'present' ? 'bg-orange' : ''}`}
			>
				{$_('menu.present')}
			</a>
			<a
				href="#past"
				class={`w-full p-2 text-center hover:bg-gold ${current === 'past' ? 'bg-gold' : ''}`}
				>{$_('menu.past')}</a
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
		class="sticky bottom-0 z-50 w-full border-t border-y-white bg-black text-center font-bold text-white md:hidden"
	>
		<ul class="divide-x-white grid w-full grid-cols-4 divide-x [&>li]:p-2">
			<li class={`hover:cursor-pointer  ${current === 'past' ? 'bg-gold' : ''}`}>
				<a href="#past">{$_('menu.past')}</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'present' ? 'bg-orange' : ''}`}>
				<a href="#present">{$_('menu.present')}</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'future' ? 'bg-red' : ''}`}>
				<a href="#future">{$_('menu.future')}</a>
			</li>
			<li class={`hover:cursor-pointer ${current === 'about' ? 'bg-black' : ''}`}>
				<a href="#about">{$_('menu.about')}</a>
			</li>
		</ul>
	</nav>
</div>

<style>
	#scroll {
		scroll-snap-type: y mandatory;
	}
</style>
