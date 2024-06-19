<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

	let clock, mixer;
	let i = 1;
	let loadModel = (i) => {};

	onMount(() => {
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);

		document.body.appendChild(renderer.domElement);

		camera.position.set(0, 100, 200);

		const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
		hemiLight.position.set(30, 200, 300);
		scene.add(hemiLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.position.set(30, 200, 300);
		scene.add(dirLight);

		const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.position.set(-30, 200, 300);
		scene.add(dirLight2);

		function animate() {
			requestAnimationFrame(animate);
			if (mixer) mixer.update(1 / 30);
			renderer.render(scene, camera);
		}

		const loader = new GLTFLoader();

		clock = new THREE.Clock();

		loadModel = (i) => {
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
						// gltf.animations.forEach((clip) => {
						// 	mixer.clipAction(clip).loop = THREE.LoopRepeat;
						// });
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
	});

	$: loadModel(i);
</script>

<div class="fixed flex w-screen justify-center">
	<div class="flex w-full justify-center gap-4">
		<input type="range" min="1" max="59" bind:value={i} />
		<div class="text-lg text-white">current {i}</div>
	</div>
</div>
