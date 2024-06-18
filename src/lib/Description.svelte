<script lang="ts">
	export let textColor: string = 'text-white';
	export let text: {
		left: string;
		right: string;
		rightDesc: string;
	} = {
		left: 'Try it!',
		right: '',
		rightDesc: ''
	};
</script>

<div class="z-10 flex flex-col gap-4 p-6 md:grid md:grid-cols-5 lg:px-8">
	<h2 class={`text-3xl font-bold ${textColor} md:w-min md:text-6xl`}>{text.left}</h2>

	<div class="mb-4 md:hidden">
		<h4 class={`mb-4 text-4xl ${textColor}`}>{text.right}</h4>
		<p>{text.rightDesc}</p>
	</div>

	<div class="col-span-3">
		<slot></slot>
	</div>

	<div class="hidden text-right md:block">
		<h4 class={`${textColor} mb-4 text-4xl`}>{text.right}</h4>
		<p>{text.rightDesc}</p>
	</div>
</div>
