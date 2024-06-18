<script>
	import Carousel from '$lib/Carousel.svelte';
	import Description from '$lib/Description.svelte';
	import Title from '$lib/Title.svelte';
</script>

<div
	class="relative grid grid-cols-1 bg-black text-white md:ml-10 md:mt-[calc(-100svh_-_2.6rem)] xl:grid-cols-3"
	id="past"
>
	<div class="space-y-8 p-6 lg:px-8">
		<Title head="The Past" title="Mae Bot Yai" color="text-gold" />
		<p class="text-balance lg:w-11/12">
			One might think that innovation and preservation are on opposite ends, but in 1924, the
			arrival of camera technology allowed the knowledge of "Mae Bot Yai" to be recorded and
			formalized, creating a record of Thai dance techniques that are still used to this day.
		</p>
	</div>
	<div class="col-span-2">
		<div class="relative w-full md:aspect-video md:border-y xl:border-none">
			<img src="/cybersubin.png" class="min-h-full min-w-full object-cover" alt="" />
			<div class="left-0 top-0 text-pretty p-6 md:absolute lg:w-11/12">
				<p>
					We begin our journey with "Mae Bot Yai" (the "Greater Fundamentals"), a set of 59
					interconnected poses that constitute the foundation of traditional Thai dance. These
					fundamentals enable dancers to execute the demanding choreography of “Khon”, a Thai
					classical court masked dance with a history spanning centuries.
				</p>
			</div>
		</div>
		<div class="bottom-0 hidden flex-col gap-4 p-6 pt-0 md:absolute md:flex xl:hidden">
			<button class="btn">Thai Traiditional Dance</button>
			<button class="btn">History of Mae Bot Yai</button>
		</div>
	</div>
	<div class="bottom-0 flex flex-col gap-4 p-6 pt-0 md:absolute md:hidden lg:px-8 xl:flex">
		<button class="btn">Thai Traiditional Dance</button>
		<button class="btn">History of Mae Bot Yai</button>
	</div>
</div>

<div
	class="relative flex h-[120svh] flex-col bg-gradient-to-b from-black to-neutral-800 text-white md:ml-10 md:h-[90svh] lg:h-[100svh] xl:h-[110svh]"
>
	<Description
		textColor="text-gold"
		text={{
			left: 'Try it!',
			right: 'Mae Bot Yai',
			rightDesc: '59 poses that constitute the foundation of traditional Thai dance'
		}}
	>
		<div class="grid h-min w-full grid-cols-2 justify-center gap-4 md:flex">
			<div class="btn">All</div>
			<div class="btn"><span class="hidden xl:inline-block">Movement</span> 1-20</div>
			<div class="btn"><span class="hidden xl:inline-block">Movement</span> 21-40</div>
			<div class="btn"><span class="hidden xl:inline-block">Movement</span> 41-59</div>
		</div>
	</Description>

	<div class="absolute bottom-0 z-0 w-full md:w-[calc(100vw_-_2.6rem)] xl:h-[100svh]">
		<div class="relative h-full overflow-hidden">
			<Carousel />
			<div class="absolute bottom-0 m-4 flex w-full justify-center">
				<p class="max-w-xs text-center">Select the pose of interest and see its 3D recording</p>
			</div>
		</div>
	</div>
</div>

<div
	class="grid grid-cols-1 bg-neutral-800 pb-12 pt-16 md:ml-10 md:grid-cols-3 lg:min-h-[100svh]"
	id="past-end"
>
	<div class="flex flex-col gap-4 px-6 md:gap-16 lg:px-8">
		<Title head="The Past" title="Mae Bot Yai" color="text-gold" />
		<p class="max-w-64 text-white">Understand the Past to Understand the Future</p>
		<div class="flex border-l border-l-gold pl-4 text-sm text-gold">
			<p class="max-w-32">Mae Bot Yai recorded on camera in 1924</p>
		</div>
	</div>
	<div class="mt-6 gap-4 space-y-8 md:col-span-2 md:mt-0">
		<div class="aspect-[21/9] w-full overflow-hidden bg-neutral-600">
			<img src="/intro/past.png" class="object-cover" alt="" />
		</div>
		<div class="grid gap-6 px-6 text-white md:pl-0 lg:grid-cols-2 lg:gap-0 lg:px-0">
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
			<div class="w-full space-y-6 text-balance lg:w-11/12">
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
