<script>
	import Title from '$lib/Components/Title.svelte';
</script>

<div
	class="relative flex flex-col bg-gradient-to-b from-black to-neutral-800 text-white md:ml-10"
></div>

<div
	class="grid grid-cols-1 bg-gradient-to-b from-black to-neutral-800 pb-12 pt-16 md:ml-10 md:grid-cols-3 lg:min-h-[100svh]"
	id="past-end"
>
	<div class="flex flex-col gap-4 px-6 md:gap-16 lg:px-8">
		<Title head="The Present" title="No.60" color="text-orange" />
		<p class="max-w-64 text-white">From Deconstruction to Reconstruction</p>
		<div class="flex border-l border-l-orange pl-4 text-sm text-orange">
			<p class="max-w-32">Pichet Klunchun's performance in Japan</p>
		</div>
	</div>
	<div class="mt-6 gap-4 space-y-8 md:col-span-2 md:mt-0">
		<div class="aspect-[21/9] w-full overflow-hidden bg-neutral-600">
			<img src="/intro/past.png" class="object-cover" alt="" />
		</div>
		<div class="grid gap-6 px-6 text-white md:pl-0 lg:grid-cols-2 lg:gap-0 lg:px-0">
			<div class="w-full text-balance lg:w-11/12">
				<p></p>
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
