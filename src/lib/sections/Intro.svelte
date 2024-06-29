<script>
	import { _ } from 'svelte-i18n';
</script>

<div class="hero text-white">
	<div class="grid w-full divide-y text-sm md:grid-cols-3 md:gap-y-12 md:divide-y-0 md:text-base">
		{#each ['past', 'present', 'future'] as text, i}
			<div
				class="flex aspect-video w-full flex-col items-center justify-between overflow-hidden md:aspect-[16/10]"
			>
				<div class="relative aspect-video w-full">
					<div class="aspect-video opacity-90">
						<img src={`/intro/${text}.png`} class="h-full w-full object-cover" alt="" />
					</div>
					<div class="absolute bottom-0 mb-3 w-full text-center font-bold md:mb-1">
						{$_(`menu.${text}`)} <span class="md:hidden">· {$_(`intro.${text}`)}</span>
					</div>
				</div>
				<div class="hidden md:block">{$_(`intro.${text}`)}</div>
			</div>
		{/each}
	</div>

	<div class="my-10 grid gap-y-6 px-6 text-base md:p-12 md:pt-6 lg:grid-cols-3 lg:px-0">
		<div class="lg:px-8">
			<div class="mb-4 text-6xl md:text-8xl">100</div>
			<p class="max-w-sm text-2xl">{$_('intro.tagline')}</p>
		</div>
		<div class="w-full text-balance lg:w-11/12">
			<p>
				{$_('intro.p1')}
			</p>
		</div>
		<div class="w-full space-y-6 text-pretty lg:w-11/12">
			<p>
				{$_('intro.p2')}
			</p>
			<div>
				<a href="https://cybersubin.media.mit.edu" class="btn">{$_('intro.button')} ↗</a>
			</div>
		</div>
	</div>
</div>
