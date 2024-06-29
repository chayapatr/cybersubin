<script>
	import { isLoading, locale } from 'svelte-i18n';
	import { i18nInit } from '$lib/i18n';
	import { onMount } from 'svelte';
	import '../app.css';

	i18nInit();

	onMount(() => {
		const lang = sessionStorage.getItem('lang');
		if (lang) locale.set(lang);
	});
</script>

{#if $isLoading}
	<div class="p-2 text-white">Changing Language...</div>
{:else}
	<slot></slot>
{/if}

<style></style>
