<script>
	export let head = '';
	export let title = '';
	export let color = 'text-white';
</script>

<div>
	<h2 class={`text-3xl font-bold ${color}`}>{head}</h2>
	<h4 class="w-min text-6xl text-white">{title}</h4>
</div>
