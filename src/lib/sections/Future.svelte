<script>
	import Title from '$lib/Components/Title.svelte';
</script>

<div class="relative flex min-h-[80svh] overflow-hidden text-white md:ml-10 lg:min-h-[100svh]">
	<div class="z-50 grid md:grid-cols-3">
		<div class="p-8">
			<Title head="The Future" title="Cyber Subin" color="text-red" />
		</div>
		<div class="md:hidden lg:block" />
		<div class="space-y-8 p-8 md:col-span-2 lg:col-span-1">
			<p class="xl:w-11/12">
				While the digitization approach can preserve the visual form of dance, the deeper knowledge
				and improvisational techniques remain frozen in time rather than flourishing as living
				practices.
			</p>
			<p class="xl:w-11/12">
				In 2024, a multidisciplinary team analyzed and translated the principles of Mae Bot Yai and
				No. 60 into an interactive computational model that extends beyond a mere static recording
				of a dance performance. They developed an interactive system that allows the dancer,
				choreographer, and even the audience to participate in altering the choreography of the
				virtual agents by adjusting parameters that represent traditional Thai dance elements.
			</p>
			<a href="https://cybersubin.pages.dev" class="btn inline-block">Let's Experiment</a>
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

<div
	class="grid grid-cols-1 bg-neutral-800 pb-12 pt-16 md:ml-10 md:grid-cols-3 lg:min-h-[100svh]"
	id="past-end"
>
	<div class="flex flex-col gap-4 px-6 md:gap-16 lg:px-8">
		<Title head="The Future" title="Cyber Subin" color="text-red" />
	</div>
	<div class="mt-6 gap-4 space-y-8 md:col-span-2 md:mt-0">
		<div class="aspect-[21/9] w-full overflow-hidden bg-neutral-600">
			<img src="/cybersubin-2.png" class="object-cover" alt="" />
		</div>
		<div class="grid gap-6 px-6 text-white md:pl-0 lg:grid-cols-2 lg:gap-0 lg:px-0">
			<div class="w-full text-balance lg:w-11/12">
				<p>
					A multidisciplinary team developed a Human-AI system based on the "No. 60" principles
					established by Thai choreographer Pichet Klunchun, creating computational procedures to
					replicate the effects of the principles. This paradigm allows practitioners to interact
					with computational manifestations of ancestral choreographic knowledge, acknowledging
					non-Western knowledge systems often overlooked in colonial understandings of AI.
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
			</div>
		</div>
	</div>
</div>
