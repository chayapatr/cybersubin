<script lang="ts">
	import { onMount } from 'svelte';
	let points: HTMLElement, text: HTMLElement;

	let lines: { x: number; y: number }[][] = [];

	const length = (x1: number, x2: number, y1: number, y2: number) => {
		return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
	};

	onMount(() => {
		[...points.children].forEach((element, i) => {
			const elmRect = element.getBoundingClientRect();
			const pointRect = points.children[i].getBoundingClientRect();
			// console.log(
			// 	element,
			// 	points.children[i],
			// 	elmRect,
			// 	pointRect,
			// 	document.querySelector('#asf')?.getBoundingClientRect()
			// );
			// console.log('left', pointRect.x);
			lines[i] = [
				{
					x: elmRect.left,
					y: elmRect.top
				},
				{
					x: pointRect.left,
					y: pointRect.top
				}
			];
		});

		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					[...Array(6)].forEach((element, i) => {
						const elmRect = text.children[i].getBoundingClientRect();
						const pointRect = points.children[i].getBoundingClientRect();

						lines[i] = [
							{
								x: elmRect.left,
								y: elmRect.top
							},
							{
								x: pointRect.left,
								y: pointRect.top
							}
						];
					});
				});
			});
		});
	});
</script>

<div class="absolute left-0 top-0 flex h-full w-screen items-center justify-center md:-ml-10">
	<div class="relative">
		<img src="/6-elements.png" class="w-[80vw] md:h-[50vh] md:w-auto" alt="" />
		<div class="absolute left-0 top-0 h-full w-full" id="asf">
			<div class="relative h-full w-full" bind:this={points}>
				<div class=" absolute left-[15%] top-[12%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[53%] top-[5%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[15%] top-[48%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[15%] top-[75%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[72%] top-[65%] size-5 bg-violet-500"></div>
				<div class=" absolute left-[51%] top-[18%] size-5 bg-violet-500"></div>
			</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 h-full w-screen">
		<div class="relative h-full w-full" bind:this={text}>
			<div class="absolute left-[24%] top-[24%] text-white">Axis Point</div>
			<div class="absolute left-[70%] top-[20%] text-white">Shifting Relations</div>
			<div class="absolute left-[10%] top-[60%] text-white">Synchronous Limbs</div>
			<div class="absolute left-[12%] top-[80%] text-white">Circle & Curves</div>
			<div class="absolute left-[70%] top-[70%] text-white">External Body Space</div>
			<div class="absolute left-[75%] top-[50%] text-white">Energy</div>
		</div>
	</div>
	<div class="absolute left-0 top-0 h-full w-screen">
		<div class="relative h-full w-full">
			<div class="text-white">
				{JSON.stringify(lines)}
			</div>
			{#each lines as line}
				<div
					class="absolute text-xs text-white"
					style={`
                        background-color: #eee;
                        opacity: 0.5;
                        height: 1px;
                        width: ${length(line[0].x, line[1].x, line[0].y, line[1].y)}px;
                        left: ${line[0].x}px;
                        top: ${line[0].y}px;
                        transform-origin: left;
                        transform: rotate(${(Math.atan2(line[1].y - line[0].y, line[1].x - line[0].x) * 180) / Math.PI}deg);
                    `}
				>
					{JSON.stringify(line)}
				</div>
			{/each}
		</div>
	</div>
</div>
