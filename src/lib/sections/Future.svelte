<script>
	import Title from '$lib/Components/Title.svelte';
	import { _ } from 'svelte-i18n';
</script>

<div class="relative flex min-h-[80svh] overflow-hidden text-white md:ml-10 lg:min-h-[100svh]">
	<div class="z-50 grid md:grid-cols-3">
		<div class="p-8">
			<Title head={$_('menu.future')} title="Cyber Subin" color="text-red" />
		</div>
		<div class="md:hidden lg:block" />
		<div class="space-y-8 p-8 md:col-span-2 lg:col-span-1">
			<p class="xl:w-11/12">
				{$_('future.hero1.p1')}
			</p>
			<p class="xl:w-11/12">
				{$_('future.hero1.p2')}
			</p>
			<!-- <a href="https://opencyberdance.pages.dev" class="btn inline-block">Let's Experiment</a> -->
		</div>
	</div>
	<div class="bg-red-500 absolute bottom-0 left-0 z-50 w-full p-6 text-4xl text-white">
		<div class="relative w-full">
			<div
				class="absolute left-0 top-[100%] hidden -rotate-90 md:block"
				style="transform-origin: top left"
			>
				Human-AI<br />Co-Dancing
			</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 z-0 h-[110svh] w-full overflow-hidden">
		<img src="/cybersubin.png" class="min-h-full object-cover opacity-50 lg:opacity-100" alt="" />
	</div>
</div>

<div class="relative h-[100svh] w-full md:pl-10">
	<iframe
		class="h-full w-full"
		src="https://opencyberdance.pages.dev/"
		title="cybersubin"
		frameborder="0"
	></iframe>
	<div class="absolute right-0 top-0 p-3 md:p-6">
		<h2 class={`text-3xl font-bold text-red md:w-min md:text-6xl`}>{$_('try')}</h2>
	</div>
</div>

<div
	class="grid grid-cols-1 bg-neutral-800 pb-12 pt-16 md:ml-10 md:grid-cols-3 lg:min-h-[100svh]"
	id="past-end"
>
	<div class="flex flex-col gap-4 px-6 md:gap-16 lg:px-8">
		<Title head={$_('menu.future')} title="Cyber Subin" color="text-red" />
	</div>
	<div class="mt-6 gap-4 space-y-8 md:col-span-2 md:mt-0">
		<div class="aspect-[21/9] w-full overflow-hidden bg-neutral-600">
			<img src="/cybersubin-2.png" class="center min-h-full min-w-full object-cover" alt="" />
		</div>
		<div class="grid gap-6 px-6 text-white md:pl-0 lg:grid-cols-2 lg:gap-0 lg:px-0">
			<div></div>
			<div class="w-full space-y-6 text-balance lg:w-11/12">
				<p>
					{$_('future.hero2.p1')}
				</p>
			</div>
		</div>
	</div>
</div>
