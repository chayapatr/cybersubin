<script lang="ts">
	import { onMount } from 'svelte';
	import Title from '../Title.svelte';
	import { fade, scale } from 'svelte/transition';
	import Description from '../Description.svelte';
	import SixElementsContent from './SixElements.svelte';

	let current = 0;
	let overall: HTMLElement, sectionTop: HTMLElement, one: HTMLElement, points: HTMLElement;

	let styles: string[] = [];

	let transform = (i: number) => {};
	onMount(() => {
		let scale: string = window.innerWidth > 768 ? 'scale(3,3)' : 'scale(4, 4)';
		transform = (i: number) => {
			if (!styles[i]) {
				const rect = one.children[i].getBoundingClientRect();
				styles[i] =
					`translate(calc(50vw - ${rect.left + rect.width / 2}px), calc(50vh - ${rect.top + rect.height / 2}px)) ${scale}`;
				return `translate(calc(50vw - ${rect.left + rect.width / 2}px), calc(50vh - ${rect.top + rect.height / 2}px)) ${scale}`;
			} else {
				return styles[i];
			}
		};

		// on window size change
		window.addEventListener('resize', () => {
			console.log('resize!');
			styles = [];
		});

		const oneRect = one.getBoundingClientRect();
		document.addEventListener('scroll', () => {
			const overallRect = overall.getBoundingClientRect();
			const sectionTopRect = sectionTop.getBoundingClientRect();
			if (overallRect.top < 0 && overallRect.bottom > 0) {
				const m = overallRect.height - sectionTopRect.height - oneRect.height;
				current = Math.min(Math.floor(-overallRect.top / (m / 6)), 5);
				// console.log(current);
			}
		});
	});
</script>

<div
	class="relative flex h-[400vh] min-h-full flex-col bg-black md:ml-10"
	id="present"
	bind:this={overall}
>
	<div class="grid grid-cols-3" bind:this={sectionTop}>
		<div class="p-8">
			<Title head="The Present" title="No.60" color="text-orange" />
		</div>
		<div />
		<div class="flex-col items-end gap-2 p-8 text-right md:flex">
			<h4 class="text-3xl text-orange">The Diagram</h4>
			<p class="max-w-xs text-white">
				This is a 100 years journey of choreography from culture to computer
			</p>
		</div>
	</div>
	<div class="sticky top-0">
		<div class="relative">
			<div class="flex min-h-screen w-full flex-col items-center justify-center gap-2 p-2 md:p-8">
				<div
					class="relative grid w-full grid-cols-6 gap-1 md:grid-cols-12"
					bind:this={one}
					transition:fade
				>
					{#each [...Array(59).keys()] as i}
						<div
							class="relative aspect-[2/3] w-full overflow-hidden transition-all duration-500"
							style={`${current > 2 ? `transform: ${transform(i)}; opacity: 0.4;` : ''} `}
						>
							{#if current < 2}
								<img
									src={`/original/${i + 1}.jpg`}
									class="min-h-full min-w-full"
									alt=""
									transition:fade={{ duration: 200 }}
								/>
							{/if}
							{#if current > 0}
								<img
									src={`/diagram/${i + 1}.png`}
									class="absolute left-0 top-0 object-cover"
									alt=""
									transition:fade
								/>
							{/if}
						</div>
					{/each}
					<div
						class={`relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden text-lg transition-all duration-500`}
						style={`${current > 2 ? ` transform: ${transform(59)}; opacity: 0.4;` : ''} `}
					>
						{#if current > 0 && current < 4}
							<span class="text-white" transition:fade>?</span>
						{/if}
					</div>
				</div>
				{#if current > 3}
					<div class="absolute left-0 top-0 h-[100svh] w-full" transition:fade>
						<Description
							textColor="text-orange"
							text={{
								left: 'Try it!',
								right: 'No.60',
								rightDesc: ''
							}}
						>
							<p class="text-white">
								Six elements were discovered from the analysis of the Mae Bot Yai fundamentals,
								which aim to empower choreographers and dancers to invent the next movement (the
								imaginary 60th movement, hence the name "No. 60")
							</p></Description
						>
						<SixElementsContent />
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div
	class="relative flex flex-col bg-gradient-to-b from-black to-neutral-800 text-white md:ml-10"
></div>

<div class="grid h-[100svh] bg-neutral-800 pt-16 md:ml-10 md:grid-cols-3" id="present-end">
	<div class="flex flex-col gap-16 px-8">
		<Title head="The Present" title="No.60" color="text-orange" />
		<p class="max-w-64 text-white">From Deconstruction to Reconstruction</p>
		<div class="flex border-l border-l-orange pl-4 text-sm text-orange">
			<p class="max-w-32 text-balance">Pichet Klunchun's performance in Japan</p>
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
