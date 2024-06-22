<script>
	// @ts-nocheck
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
	import { slider } from '$lib/store';

	export let i = 1;
	export let seek = undefined;

	let clock, mixer, controls, canvas, camera, clip;
	let loadModel = (i) => {};
	let seekAnimationTime = () => {};
	let stop = false;

	onMount(() => {
		const scene = new THREE.Scene();
		const canvasRect = canvas.getBoundingClientRect();

		camera = new THREE.PerspectiveCamera(60, canvasRect.width / canvasRect.height, 0.1, 1000);
		camera.position.set(0, 50, 200);

		const renderer = new THREE.WebGLRenderer();

		renderer.setSize(canvasRect.width, canvasRect.height);
		renderer.setPixelRatio(window.devicePixelRatio * 1.5);

		// const geometry = new THREE.BoxGeometry(2, 2, 2);
		// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		// const cube = new THREE.Mesh(geometry, material);
		// scene.add(cube);

		canvas.appendChild(renderer.domElement);

		controls = new OrbitControls(camera, renderer.domElement);

		controls.enablePan = false;
		controls.enableZoom = false;
		// controls.maxDistance = 300;
		// controls.minDistance = 150;

		controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
		controls.dampingFactor = 0.05;

		controls.screenSpacePanning = false;

		const dirLight = new THREE.DirectionalLight(0xffffff, 2);
		dirLight.position.set(-30, 200, 300);
		scene.add(dirLight);

		const dirLight2 = new THREE.DirectionalLight(0xffffff, 2);
		dirLight2.position.set(-30, 200, 300);
		scene.add(dirLight2);

		const dirLight3 = new THREE.DirectionalLight(0xffffff, 2);
		dirLight3.position.set(0, 200, -300);
		scene.add(dirLight3);

		function animate() {
			if (stop) return;
			requestAnimationFrame(animate);
			if (mixer) {
				const time = clip?.[0].duration;
				const speed = 4;
				$slider = ($slider + (clock.getDelta() / (time / speed)) * 100) % 100;
				// console.log($slider);
				mixer.update(clock.getDelta() * speed);
			}

			scene.children.forEach((child) => {
				if (child.type === 'Group') {
					// const index = child.children.length - 1;
					// if (child.children[index].children.length === 2) {
					// 	child.children[index].children[1].position.set(0, i < 5 ? -20 : 0, 0);
					// }

					child.children[0].children[0].position.set(0, -20, 0);
					child.children[0];
				}
			});
			renderer.render(scene, camera);
		}

		const loader = new GLTFLoader();

		loadModel = (i) => {
			clock = new THREE.Clock();

			loader.load(
				`/sample.glb`,
				function (gltf) {
					for (let i = 0; i < scene.children.length; i++) {
						if (scene.children[i].type === 'Group') scene.remove(scene.children[i]);
					}
					scene.add(gltf.scene);
					renderer.render(scene, camera);

					if (gltf.animations.length > 0) {
						mixer = new THREE.AnimationMixer(gltf.scene);
						clip = gltf.animations;
						// gltf.animations.forEach((clip) => {
						// let animation = mixer.clipAction(gltf.animations[0]);
						// animation.setLoop(THREE.LoopOnce);
						// });
						$slider = 0;
						mixer.clipAction(gltf.animations[0]).play();
					}
				},
				undefined,
				function (error) {
					console.error(error);
				}
			);
		};
		animate();

		seekAnimationTime = (animMixer, percentage) => {
			// console.log(percentage);
			const time = clip?.[0].duration;
			if (time) {
				animMixer.time = 0;
				for (var i = 0; i < animMixer._actions.length; i++) {
					animMixer._actions[i].time = 0;
				}
				animMixer.update((time * percentage) / 100);
			}
		};
	});

	onDestroy(() => {
		// $slider = 0;
		// controls.dispose();
		// clock = null;
		stop = true;
	});

	$: loadModel(i);
	$: seek && seekAnimationTime(mixer, seek);
</script>

<!-- <div class="fixed z-50 flex w-screen justify-center">
	<div class="flex w-full justify-center gap-4">
		<input type="range" min="1" max="59" bind:value={i} />
		<div class="text-lg text-white">current {i}</div>
		<div class="text-lg text-white">{JSON.stringify(controls?.target)}</div>
	</div>
</div> -->

<div bind:this={canvas} class="h-full w-full"></div>
