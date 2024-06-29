<script>
	import { posture } from '$lib/59';
	import Card from '$lib/Components/Card.svelte';
	import { current } from '$lib/store';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';

	// Credit: Hoang Tran (https://fb.com/99.hoangtran)

	export let set;

	let carousel;

	let radius = $set === 0 ? 800 : 300; // how big of the radius
	// let n = $set === 0 ? 59 : $set === 2 ? 19 : 20;

	$: arr =
		$set === 0
			? [...Array(59)].map((n, i) => i)
			: [...Array(20)].map((n, i) => ($set - 1) * 20 + i);

	onMount(() => {
		setTimeout(init, 0);

		var w = document.documentElement.clientWidth;
		if (w < 768) {
			radius = $set === 0 ? 500 : 300;
		} else {
			radius = $set === 0 ? 800 : 500;
		}

		window.addEventListener('resize', function (event) {
			var w = document.documentElement.clientWidth;
			if (w < 768) {
				radius = $set === 0 ? 500 : 300;
			} else {
				radius = $set === 0 ? 800 : 500;
			}
		});

		var odrag = document.getElementById('drag-container');
		var ospin = document.getElementById('spin-container');
		var aEle = ospin.getElementsByClassName('card');

		// Size of images
		// ospin.style.width = imgWidth + 'px';
		// ospin.style.height = imgHeight + 'px';

		// Size of ground - depend on radius
		var ground = document.getElementById('ground');
		ground.style.width = radius * 3 + 'px';
		ground.style.height = radius * 3 + 'px';

		function init(delayTime) {
			odrag = document.getElementById('drag-container');
			ospin = document.getElementById('spin-container');
			aEle = ospin.getElementsByClassName('card');
			for (var i = 0; i < aEle.length; i++) {
				aEle[i].style.transform =
					'rotateY(' + i * (360 / aEle.length) + 'deg) translateZ(' + radius + 'px)';
				aEle[i].style.transition = 'transform 1s';
				aEle[i].style.transitionDelay = 0.1;
			}
		}

		function applyTranform(obj) {
			// Constrain the angle of camera (between 0 and 180)
			if (tY > 30) tY = 30;
			if (tY < 10) tY = 10;

			// Apply the angle
			obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
		}

		var sX,
			sY,
			nX,
			nY,
			desX = 0,
			desY = 0,
			tX = 0,
			tY = 25;

		carousel.onpointerdown = function (e) {
			clearInterval(odrag.timer);
			e = e || window.event;
			var sX = e.clientX,
				sY = e.clientY;

			this.onpointermove = function (e) {
				e = e || window.event;
				var nX = e.clientX,
					nY = e.clientY;
				desX = nX - sX;
				desY = nY - sY;
				tX += desX * 0.1;
				tY += desY * 0.1;
				applyTranform(odrag);
				sX = nX;
				sY = nY;
			};

			this.onpointerup = function (e) {
				odrag.timer = setInterval(function () {
					desX *= 0.95;
					desY *= 0.95;
					tX += desX * 0.1;
					tY += desY * 0.1;
					applyTranform(odrag);
					// playSpin(false);
					if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
						clearInterval(odrag.timer);
						// playSpin(true);
					}
				}, 17);
				this.onpointermove = this.onpointerup = null;
			};

			return false;
		};

		// document.onmousewheel = function (e) {
		// 	e = e || window.event;
		// 	var d = e.wheelDelta / 20 || -e.detail;
		// 	if (radius + d > 800) radius += d;
		// 	init(1);
		// };

		// setTimeout(() => {
		// 	console.log('change n!');
		// 	n = 20;
		// 	radius = 400;
		// 	requestAnimationFrame(() => {
		// 		init(1);
		// 	});
		// }, 3000);
	});
</script>

<div
	bind:this={carousel}
	class={`flex h-full w-screen items-center justify-center overflow-hidden ${$set !== 0 ? 'xl:scale-125' : ''}`}
>
	<div id="drag-container">
		<div
			id="spin-container"
			style="animation: spin 50s infinite linear"
			class={`aspect-[3/4] ${$set === 0 ? 'h-16 lg:h-24' : 'h-24 lg:h-32'}`}
		>
			{#each arr as i}
				<Card {i} />
			{/each}
		</div>
		<div id="ground"></div>
		<div class="z-50" id="text">
			<p>
				{$locale === 'th' ? 'แม่บทที่' : 'POSE'}
				{$current}
				{$locale === 'th'
					? posture[$current - 1].thai
					: posture[$current - 1].english.toUpperCase()}
			</p>
		</div>
	</div>
</div>

<style>
	#drag-container,
	#spin-container {
		display: -webkit-box;
		display: -ms-flexbox;
		-webkit-transform-style: preserve-3d;
		transform-style: preserve-3d;
		-webkit-transform: rotateX(-25deg);
		transform: rotateX(-25deg);
	}

	#text {
		-webkit-transform: translate(-50%, -50%) rotateX(90deg);
		transform: translate(-50%, -50%) rotateX(90deg);
		@apply absolute left-[50%] top-[100%] text-5xl font-extralight;
	}

	#ground {
		position: absolute;
		-webkit-transform: translate(-50%, -50%) rotateX(90deg);
		transform: translate(-50%, -50%) rotateX(90deg);
	}

	@-webkit-keyframes -global-spin {
		from {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		to {
			-webkit-transform: rotateY(360deg);
			transform: rotateY(360deg);
		}
	}

	@keyframes -global-spin {
		from {
			-webkit-transform: rotateY(0deg);
			transform: rotateY(0deg);
		}

		to {
			-webkit-transform: rotateY(360deg);
			transform: rotateY(360deg);
		}
	}

	@keyframes zoomIn {
		from {
			transform: scale(0);
		}

		to {
			transform: scale(1);
		}
	}

	@keyframes zoomOut {
		from {
			transform: scale(1);
		}

		to {
			transform: scale(0);
		}
	}
</style>
