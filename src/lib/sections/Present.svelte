<script lang="ts">
	import { onMount } from 'svelte';
	import Title from '../Components/Title.svelte';
	import { fade, scale } from 'svelte/transition';
	import Description from '../Components/Description.svelte';
	import SixElementsContent from './SixElements.svelte';

	let current = 0;
	let show = false;
	let overall: HTMLElement, sectionTop: HTMLElement, one: HTMLElement, points: HTMLElement;

	let styles: string[] = [];

	let transform = (i: number) => {};
	onMount(() => {
		let scale: string = window.innerWidth > 768 ? 'scale(3,3)' : 'scale(4, 4)';
		transform = (i: number) => {
			// if (!styles[i]) {
			const rect = one.children[i].getBoundingClientRect();
			styles[i] =
				`translate(calc(50vw - ${rect.left + rect.width / 2}px), calc(50vh - ${rect.top + rect.height / 2}px)) ${scale}`;
			return `translate(calc(50vw - ${rect.left + rect.width / 2}px), calc(50vh - ${rect.top + rect.height / 2}px)) ${scale}`;
			// } else {
			// 	return styles[i];
			// }
		};

		// on window size change
		// window.addEventListener('resize', () => {
		// 	console.log('resize!');
		// 	styles = [];
		// });

		const oneRect = one.getBoundingClientRect();
		const section = (n: number) => {
			if (n < 1) return 0;
			else if (n < 1.5) return 1;
			else if (n < 2) return 2;
			else return 3;
		};
		document.addEventListener('scroll', () => {
			const overallRect = overall.getBoundingClientRect();
			const sectionTopRect = sectionTop.getBoundingClientRect();
			if (overallRect.top < 0 && overallRect.bottom > 0) {
				const m = overallRect.height - sectionTopRect.height - oneRect.height;
				current = section(-overallRect.top / (m / 4));
				show = -overallRect.top / (m / 6) > 4;
			}
		});
	});
</script>

<div class="relative flex h-[400vh] min-h-full flex-col bg-black xl:ml-10" bind:this={overall}>
	<!-- <div class=" sticky left-0 top-0 bg-white p-2">
		{current}
		{show}
	</div> -->
	<div class="grid p-6 pt-12 md:grid-cols-3 lg:px-10" bind:this={sectionTop}>
		<div>
			<Title head="The Present" title="No.60" color="text-orange" />
		</div>
		<div />
		<div class="flex-col items-end gap-2 pt-8 md:flex md:text-right lg:mx-10 lg:pt-0">
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
				{#if show}
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
