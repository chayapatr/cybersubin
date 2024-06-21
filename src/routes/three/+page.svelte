<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

	let clock, mixer, controls, canvas, camera;
	let i = 1;
	let loadModel = (i) => {};

	onMount(() => {
		const scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
		camera.position.set(0, 100, 200);

		const renderer = new THREE.WebGLRenderer();
		const canvasRect = canvas.getBoundingClientRect();

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
			requestAnimationFrame(animate);
			if (mixer) mixer.update(1 / 30);
			scene.children.forEach((child) => {
				if (child.type === 'Group') {
					console.log(child);
					const index = child.children.length - 1;
					if (child.children[index].children.length === 2) {
						child.children[index].children[1].position.set(0, 0, 0);
					}
				}
			});
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

<div class="fixed z-50 flex w-screen justify-center">
	<div class="flex w-full justify-center gap-4">
		<input type="range" min="1" max="59" bind:value={i} />
		<div class="text-lg text-white">current {i}</div>
		<!-- <div class="text-lg text-white">{JSON.stringify(controls?.target)}</div> -->
	</div>
</div>

<div bind:this={canvas} class="fixed left-0 top-0 h-screen w-screen"></div>
