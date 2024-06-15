<script>
	export let head = '';
	export let title = '';
	export let color = 'text-white';
</script>

<div>
	<h2 class={`text-2xl font-bold md:text-3xl ${color}`}>{head}</h2>
	<h4 class="text-4xl text-white md:w-min md:text-6xl">{title}</h4>
</div>
