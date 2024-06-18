<script>
	import Title from '$lib/Title.svelte';
</script>

<div class="hero relative md:ml-10" id="future">
	<div class="z-50 grid md:grid-cols-3">
		<div class="p-8">
			<Title head="The Future" title="Cyber Subin" color="text-red" />
		</div>
		<div />
		<div class="space-y-8 p-8">
			<p class="max-w-md">
				While the digitization approach can preserve the visual form of dance, the deeper knowledge
				and improvisational techniques remain frozen in time rather than flourishing as living
				practices.
			</p>
			<p class="max-w-md">
				In 2024, a multidisciplinary team analyzed and translated the principles of Mae Bot Yai and
				No. 60 into an interactive computational model that extends beyond a mere static recording
				of a dance performance. They developed an interactive system that allows the dancer,
				choreographer, and even the audience to participate in altering the choreography of the
				virtual agents by adjusting parameters that represent traditional Thai dance elements.
			</p>
			<button class="btn">Let's Experiment</button>
		</div>
	</div>
	<div class="bg-red-500 absolute bottom-0 left-0 z-50 w-full p-6 text-4xl text-white">
		<div class="relative w-full">
			<div class="absolute left-0 top-[100%] block -rotate-90" style="transform-origin: top left">
				Human-AI<br />Co-Dancing
			</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
		<img src="/cybersubin.png" class="min-h-[100svh] min-w-[100vw] object-cover" alt="" />
	</div>
</div>

<div class="grid h-[100svh] bg-neutral-800 pt-16 md:ml-10 md:grid-cols-3" id="future-end">
	<div class="flex flex-col gap-16 px-8">
		<Title head="The Future" title="Cyber Subin" color="text-red" />
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
