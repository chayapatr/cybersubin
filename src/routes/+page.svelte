<script>
	import Carousel from '$lib/Carousel.svelte';
</script>

<div class="flex h-[100svh] flex-col bg-black text-white">
	<nav class="w-full border-b border-y-white text-center font-bold">
		<ul class="divide-x-white grid w-full grid-cols-4 divide-x [&>li]:p-2">
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Past</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Present</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Future</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">About</li>
		</ul>
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

<div class="hero">
	<div class="grid w-full text-sm md:grid-cols-3 md:gap-y-12 md:text-base">
		{#each [['Past', '1924'], ['Present', '2017'], ['Future', '2024']] as text, i}
			<div class="flex aspect-video w-full flex-col items-center justify-between md:aspect-[16/10]">
				<div class="relative aspect-video w-full">
					<div class={`aspect-video ${i % 2 ? 'bg-neutral-700' : 'bg-neutral-600'}`}></div>
					<div class="absolute bottom-0 mb-3 w-full text-center font-bold md:mb-1">
						{text[0]} <span class="md:hidden">· {text[1]}</span>
					</div>
				</div>
				<div class="hidden md:block">{text[1]}</div>
			</div>
		{/each}
	</div>
	<div class="my-10 grid gap-y-6 px-8 md:mb-0 md:mt-12 md:grid-cols-3 md:px-0">
		<div class="md:px-8">
			<div class="mb-4 text-6xl md:text-8xl">100</div>
			<p class="max-w-sm text-xl md:text-2xl">
				years journey of choreography from culture to computer
			</p>
		</div>
		<div class="max-w-md">
			<p>
				Traditional dance forms serve as living cultural heritage, with choreographic knowledge
				transmitted through embodied practices. While digitization has enabled preservation, the
				deeper layers of tacit knowledge and improvisation remain frozen. This research introduces
				an approach to computationally formalize traditional dance knowledge as an interactive
				model, combining human dancers with virtual partners powered by computational systems
				derived from dance principles.
			</p>
		</div>
		<div class="max-w-md space-y-6">
			<p>
				A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
				established by Thai choreographer Pichet Klunchun, creating computational procedures to
				replicate the effects of the principles. This paradigm allows practitioners to interact with
				computational manifestations of ancestral choreographic knowledge, acknowledging non-Western
				knowledge systems often overlooked in colonial understandings of AI.
			</p>
			<button class="rounded-full border border-white px-3 py-1">Learn More</button>
		</div>
	</div>
</div>

<div class="relative">
	<div
		class="sticky left-0 top-[100%] z-50 -mb-10 mt-[100svh] hidden w-[100svh] -rotate-90 border-b border-b-white bg-neutral-800 font-bold text-white md:block"
		style="transform-origin: top left;"
	>
		<div class="divide-x-white grid w-full grid-cols-4 divide-x">
			<div class="w-full p-2 text-center">About</div>
			<div class="w-full p-2 text-center">Future</div>
			<div class="w-full p-2 text-center">Present</div>
			<div class="w-full p-2 text-center">Past</div>
		</div>
	</div>

	<div
		class="relative flex h-[120svh] flex-col bg-gradient-to-b from-black to-neutral-800 text-white md:ml-10 md:mt-[calc(-100svh_-_2.6rem)]"
	>
		<div class="z-10 grid grid-cols-5 gap-4 p-8">
			<h2 class="text-6xl font-bold text-gold">Try<br />it!</h2>
			<div class="col-span-3 flex h-min gap-4">
				<div class="rounded-full border border-white px-4 py-2">All</div>
				<div class="rounded-full border border-white px-4 py-2">Movement 1-20</div>
				<div class="rounded-full border border-white px-4 py-2">Movement 21-40</div>
				<div class="rounded-full border border-white px-4 py-2">Movement 41-59</div>
			</div>
			<div>
				<h4 class="mb-4 text-4xl text-gold">Mae Bot Yai</h4>
				<p>This is a 100 years journey of choreography from culture to computer</p>
			</div>
		</div>
		<div class="absolute bottom-0 z-0 h-[100svh]" style="width: calc(100vw - 2.6rem);">
			<div class="relative h-full overflow-hidden">
				<Carousel />
				<div class="absolute bottom-0 m-4 w-full text-center">
					Please select the movement to learn more
				</div>
			</div>
		</div>
	</div>

	<div class="grid h-[100svh] bg-neutral-800 pt-16 md:ml-10 md:grid-cols-3">
		<div class="flex flex-col gap-16 px-8">
			<h2 class="text-6xl font-bold text-gold">The<br />Past</h2>
			<div class="space-y-2">
				<h4 class="text-3xl text-gold">Mae Bot Yai</h4>
				<p class="max-w-xs text-white">
					This is a 100 years journey of choreography from culture to computer
				</p>
			</div>
		</div>
		<div class="col-span-2 space-y-8">
			<div class="aspect-[21/9] w-full bg-neutral-600" />
			<div class="grid grid-cols-2 text-white">
				<div class="max-w-md">
					<p>
						Traditional dance forms serve as living cultural heritage, with choreographic knowledge
						transmitted through embodied practices. While digitization has enabled preservation, the
						deeper layers of tacit knowledge and improvisation remain frozen. This research
						introduces an approach to computationally formalize traditional dance knowledge as an
						interactive model, combining human dancers with virtual partners powered by
						computational systems derived from dance principles.
					</p>
				</div>
				<div class="max-w-md space-y-6">
					<p>
						A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
						established by Thai choreographer Pichet Klunchun, creating computational procedures to
						replicate the effects of the principles. This paradigm allows practitioners to interact
						with computational manifestations of ancestral choreographic knowledge, acknowledging
						non-Western knowledge systems often overlooked in colonial understandings of AI.
					</p>
					<button class="rounded-full border border-white px-3 py-1">Learn More</button>
				</div>
			</div>
		</div>
	</div>

	<div class="hero md:ml-10">
		<div class="grid md:grid-cols-3">
			<h2 class="p-8 text-6xl font-bold text-orange">The<br />Present</h2>
			<div />
			<div class="space-y-2 p-8">
				<h4 class="text-3xl text-orange">The Diagram</h4>
				<p class="max-w-xs text-white">
					This is a 100 years journey of choreography from culture to computer
				</p>
			</div>
		</div>
		<div class="flex h-full w-full items-center justify-center p-8">
			<img src="/six.png" class="w-full" alt="" />
		</div>
	</div>

	<div class="grid h-[100svh] bg-neutral-800 pt-16 md:ml-10 md:grid-cols-3">
		<div class="flex flex-col gap-16 px-8">
			<h2 class="text-6xl font-bold text-orange">The<br />Present</h2>
			<div class="space-y-2">
				<h4 class="text-3xl text-orange">Mae Bot Yai</h4>
				<p class="max-w-xs text-white">
					This is a 100 years journey of choreography from culture to computer
				</p>
			</div>
		</div>
		<div class="col-span-2 space-y-8">
			<div class="aspect-[21/9] w-full bg-neutral-600" />
			<div class="grid grid-cols-2 text-white">
				<div class="max-w-md"></div>
				<div class="max-w-md space-y-6">
					<p>
						A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
						established by Thai choreographer Pichet Klunchun, creating computational procedures to
						replicate the effects of the principles. This paradigm allows practitioners to interact
						with computational manifestations of ancestral choreographic knowledge, acknowledging
						non-Western knowledge systems often overlooked in colonial understandings of AI.
					</p>
					<button class="rounded-full border border-white px-3 py-1">Learn More</button>
				</div>
			</div>
		</div>
	</div>

	<div class="hero relative md:ml-10">
		<div class="z-50 grid md:grid-cols-3">
			<h2 class="p-8 text-6xl font-bold text-red">The<br />Future</h2>
			<div />
			<div class="space-y-6 py-8">
				<p class="max-w-md">
					Traditional dance forms serve as living cultural heritage, with choreographic knowledge
					transmitted through embodied practices. While digitization has enabled preservation, the
					deeper layers of tacit knowledge and improvisation remain frozen. This research introduces
					an approach to computationally formalize traditional dance knowledge as an interactive
					model, combining human dancers with virtual partners powered by computational systems
					derived from dance principles.
				</p>
				<button class="rounded-full border border-white px-3 py-1">Let's Experiment</button>
			</div>
		</div>
		<div class="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
			<img src="/cybersubin.png" class="min-h-[100svh] min-w-[100vw] object-cover" alt="" />
		</div>
	</div>

	<div class="grid h-[100svh] bg-neutral-800 pt-16 md:ml-10 md:grid-cols-3">
		<div class="flex flex-col gap-16 px-8">
			<h2 class="text-6xl font-bold text-red">The<br />Future</h2>
		</div>
		<div class="col-span-2 space-y-8">
			<div class="aspect-[21/9] w-full bg-neutral-600" />
			<div class="grid grid-cols-2 text-white">
				<div class="max-w-md">
					<p>
						A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
						established by Thai choreographer Pichet Klunchun, creating computational procedures to
						replicate the effects of the principles. This paradigm allows practitioners to interact
						with computational manifestations of ancestral choreographic knowledge, acknowledging
						non-Western knowledge systems often overlooked in colonial understandings of AI.
					</p>
				</div>
				<div class="max-w-md space-y-6">
					<p>
						A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
						established by Thai choreographer Pichet Klunchun, creating computational procedures to
						replicate the effects of the principles. This paradigm allows practitioners to interact
						with computational manifestations of ancestral choreographic knowledge, acknowledging
						non-Western knowledge systems often overlooked in colonial understandings of AI.
					</p>
					<button class="rounded-full border border-white px-3 py-1">Learn More</button>
				</div>
			</div>
		</div>
	</div>

	<div
		class="grid bg-gradient-to-b from-neutral-800 to-neutral-600 pb-12 pt-16 text-white md:ml-10 md:h-[100svh] md:grid-cols-3 [&>div]:max-w-md"
	>
		<div class="pl-8">
			<p>
				<span class="font-bold">Open Lab:</span><br />
				Chayapatr Archiwaranguprok<br />
				Phoomparin Mano<br />
				Piyaporn Bhongse-tong<br />
				Pichet Klunchun<br />
				Pat Pataranutaporn
			</p>
		</div>
		<div>
			<p>
				<span class="font-bold">Co-creator:</span><br />
				Pichet Klunchun<br />
				Pat Pataranutaporn<br /><br />
				<span class="font-bold">Choreographer/Director:</span><br />
				Pichet Klunchun<br /><br />
				<span class="font-bold">Dancers:</span><br />
				Padung Jumpan<br />
				Tas Chongchadklang<br />
				Chang Hong Chung<br />
				King Fai Tsang<br /><br />
				<span class="font-bold">Music Director and Composer:</span><br />
				Lamtharn Hantrakul<br /><br />
				<span class="font-bold">3D and Animation Creator:</span><br />
				Piyaporn Bhongse-tong
			</p>
		</div>
		<div>
			<p>
				<span class="font-bold">Creative Technologist:</span><br />
				Phoomparin Mano<br />
				Chayapatr Archiwaranguprok<br /><br />
				<span class="font-bold">Cyborg Scientist and Philosopher:</span><br />
				Pat Pataranutaporn<br /><br />
				<span class="font-bold">Lighting Designer:</span><br />
				Ray Tseng<br /><br />
				<span class="font-bold">Dramaturg:</span><br />
				How Ngean Lim<br /><br />
				<span class="font-bold">Producer:</span><br />
				Sojirat Singholka<br /><br />
				<span class="font-bold">Stage Manager:</span><br />
				Jirach Eaimsa-Ard
			</p>
		</div>
	</div>

	<nav
		class="sticky bottom-0 z-50 w-full border-t border-y-white bg-black text-center font-bold text-white md:hidden"
	>
		<ul class="divide-x-white grid w-full grid-cols-4 divide-x [&>li]:p-2">
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Past</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Present</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">Future</li>
			<li class="hover:cursor-pointer hover:bg-white hover:text-black">About</li>
		</ul>
	</nav>
</div>

<style>
	.hero {
		@apply flex flex-col bg-black text-white md:h-[100svh];
	}
	.hero-no-bg {
		@apply flex flex-col text-white md:h-[100svh];
	}
</style>
