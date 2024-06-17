<script lang="ts">
	import { onMount } from 'svelte';
	import Title from './Title.svelte';
	import { fade } from 'svelte/transition';

	let current = 0;
	let overall: HTMLElement, sectionTop: HTMLElement, scrollContainer: HTMLElement, one: HTMLElement;
	onMount(() => {
		document.addEventListener('scroll', () => {
			const oneRect = one.getBoundingClientRect();
			const overallRect = overall.getBoundingClientRect();
			const sectionTopRect = sectionTop.getBoundingClientRect();
			if (overallRect.top < 0 && overallRect.bottom > 0) {
				const m = overallRect.height - sectionTopRect.height - oneRect.height;
				current = Math.min(Math.floor(-overallRect.top / (m / 4)), 3);
				console.log(current);
			}
		});
	});
</script>

<div
	class="relative flex h-[300vh] min-h-full flex-col bg-black md:ml-10"
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
				<!-- <img src="/six.png" class="w-full" alt="" /> -->
				<div class="grid w-full grid-cols-6 gap-1 md:grid-cols-12" bind:this={one}>
					{#each [...Array(59).keys()] as i}
						<div class="relative aspect-[2/3] w-full overflow-hidden bg-black">
							{#if current < 2}
								<img
									src={`/original/${i + 1}.jpg`}
									class="min-h-full min-w-full"
									alt=""
									transition:fade
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
						class={`relative flex aspect-[2/3] w-full items-center justify-center overflow-hidden text-lg transition-all`}
					>
						{#if current > 0 && current < 4}
							<span class="text-white" transition:fade>?</span>
						{/if}
					</div>
				</div>
				<!-- <div
					bind:this={one}
					class={`aspect-[21/9] w-full ${['bg-blue-300', 'bg-blue-400', 'bg-blue-500'][current]}`}
				></div> -->
			</div>
			<!-- <div class="hidden text-center text-white md:block">
				{['59 Mae Bot', '59 Mae Bot + 6 Elements', '6 Elements'][current]}
			</div> -->
		</div>
	</div>
	<!-- {#each [...Array(59).keys()] as i}
		<img
			src={`/diagram/${i + 1}.png`}
			class="absolute left-0 top-0 object-cover opacity-20"
			alt=""
			transition:fade
		/>
	{/each} -->
</div>
