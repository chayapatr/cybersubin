<script>
	import { onMount } from 'svelte';

	let parallax = 0;

	onMount(() => {
		document.addEventListener('scroll', () => {
			parallax = window.scrollY;
		});
	});
</script>

<div class="flex h-[100svh] flex-col bg-gradient-to-br from-neutral-800 to-neutral-950 text-white">
	<nav class="z-20 w-full border-b border-y-white bg-black text-center font-bold">
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

	<div class="absolute left-0 top-0 z-0 h-[100svh] w-screen overflow-x-hidden">
		<img
			src="/hero/left-1.png"
			style={`transform: translate3d(0px, ${parallax * 0.08}px, 0px)`}
			class="absolute -left-[1%] bottom-[15%] h-72 lg:left-[28%] lg:top-[27%] xl:left-[32%]"
			alt=""
		/>
		<img
			src="/hero/right-1.png"
			style={`transform: translate3d(0px, -${parallax * 0.08}px, 0px)`}
			class="absolute -right-[11%] top-[30%] h-72 lg:right-[25%] lg:top-[40%] xl:right-[28%]"
			alt=""
		/>
		<img
			src="/hero/left-2.png"
			style={`transform: translate3d(0px, -${parallax * 0.1}px, 0px)`}
			class="absolute left-[4%] top-[40%] hidden h-72 lg:block xl:left-[8%]"
			alt=""
		/>
		<img
			src="/hero/right-2.png"
			style={`transform: translate3d(0px, ${parallax * 0.1}px, 0px)`}
			class="absolute right-[2%] top-[40%] hidden h-72 lg:block xl:right-[8%]"
			alt=""
		/>
	</div>
</div>
