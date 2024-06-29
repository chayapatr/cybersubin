<script>
	import Carousel from '$lib/Components/Carousel.svelte';
	import Description from '$lib/Components/Description.svelte';
	import Title from '$lib/Components/Title.svelte';
	import { mvtSet } from '$lib/store';
	import { _ } from 'svelte-i18n';
</script>

<div
	class="relative grid grid-cols-1 bg-black text-white md:ml-10 md:mt-[calc(-100svh_-_2.6rem)] xl:grid-cols-3"
>
	<div class="space-y-8 p-6 lg:px-8">
		<Title head={$_('menu.past')} title={$_('past.title')} color="text-gold" />
		<p class="text-balance lg:w-11/12">
			{$_('past.hero1.intro')}
		</p>
	</div>
	<div class="col-span-2">
		<div class="relative w-full md:aspect-video md:border-y xl:border-none">
			<img src="/maebot.png" class="min-h-full min-w-full object-cover" alt="" />
			<div class="left-0 top-0 text-pretty p-6 md:absolute lg:w-11/12">
				<p>
					{$_('past.hero1.img')}
				</p>
			</div>
		</div>
		<div class="bottom-0 hidden flex-col gap-4 p-6 pt-0 md:absolute md:flex xl:hidden">
			<a href="https://disco.teak.fi/asia/thai-classical-dance/" class="btn"
				>{$_('past.hero1.btn.dance')} ↗</a
			>
			<a
				href="https://www.google.com/books/edition/Lives_in_Motion/DKLfEAAAQBAJ?hl=en&gbpv=1&dq=Mae+Bot+Yai&pg=PT61&printsec=frontcover"
				class="btn">{$_('past.hero1.btn.history')} ↗</a
			>
		</div>
	</div>
	<div class="bottom-0 flex flex-col gap-4 p-6 pt-0 md:absolute md:hidden lg:px-8 xl:flex">
		<a href="https://disco.teak.fi/asia/thai-classical-dance/" class="btn"
			>{$_('past.hero1.btn.dance')} ↗</a
		>
		<a
			href="https://www.google.com/books/edition/Lives_in_Motion/DKLfEAAAQBAJ?hl=en&gbpv=1&dq=Mae+Bot+Yai&pg=PT61&printsec=frontcover"
			class="btn">{$_('past.hero1.btn.history')} ↗</a
		>
	</div>
</div>

<div
	class="relative flex h-[120svh] flex-col overflow-hidden bg-gradient-to-b from-black to-neutral-800 text-white md:ml-10 md:h-[90svh] lg:h-[100svh] xl:h-[110svh]"
>
	<Description
		textColor="text-gold"
		text={{
			left: $_('try'),
			right: $_('past.title2'),
			rightDesc: $_('past.caption')
		}}
	>
		<div class="grid h-min w-full grid-cols-2 justify-center gap-4 md:flex">
			<button
				on:click={() => {
					$mvtSet = 0;
				}}
				class={`mvt-btn ${$mvtSet === 0 ? 'bg-white font-bold text-black' : ''}`}>All</button
			>
			{#each [1, 2, 3] as i}
				<button
					on:click={() => {
						$mvtSet = i;
					}}
					class={`mvt-btn ${$mvtSet === i ? 'bg-white font-bold text-black' : ''}`}
					><span class="hidden xl:inline-block">{$_('past.movement')}</span>
					{(i - 1) * 20 + 1}-{Math.min(i * 20, 59)}</button
				>
			{/each}
		</div>
	</Description>

	<div
		class="absolute bottom-0 z-0 h-full w-full overflow-hidden lg:h-[100svh] xl:w-[calc(100vw_-_2.6rem)]"
	>
		<div class="relative flex h-[150svh] md:h-full">
			{#key $mvtSet}
				<Carousel set={mvtSet} />
			{/key}
		</div>
		<div class="absolute bottom-0 m-4 flex w-full justify-center">
			<p class="max-w-xs text-center">{$_('past.pose')}</p>
		</div>
	</div>
</div>

<div
	class="grid grid-cols-1 bg-gradient-to-b from-neutral-800 to-black pb-12 pt-16 md:ml-10 md:grid-cols-3 lg:min-h-[100svh]"
	id="past-end"
>
	<div class="flex flex-col gap-4 px-6 md:gap-16 lg:px-8">
		<Title head={$_('menu.past')} title={$_('past.title')} color="text-gold" />
		<p class="max-w-64 text-white">{$_('past.hero2.tagline')}</p>
		<div class="flex border-l border-l-gold pl-4 text-sm text-gold">
			<p class="max-w-32">{$_('past.hero2.caption')}</p>
		</div>
	</div>
	<div class="mt-6 gap-4 space-y-8 md:col-span-2 md:mt-0">
		<div class="aspect-[21/9] w-full overflow-hidden bg-neutral-600">
			<img src="/intro/past.png" class="object-cover" alt="" />
		</div>
		<div class="grid gap-6 px-6 text-white md:pl-0 lg:grid-cols-2 lg:gap-0 lg:px-0">
			<div class="w-full text-balance lg:w-11/12">
				<p>
					{$_('past.hero2.p1')}
				</p>
			</div>
			<div class="w-full space-y-6 text-balance lg:w-11/12">
				<p>
					{$_('past.hero2.p2')}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.mvt-btn {
		@apply rounded-full border border-white px-4 py-1 text-center hover:cursor-pointer  hover:bg-gold hover:font-bold hover:text-white;
	}
</style>
