<script>
	import { locale } from 'svelte-i18n';
</script>

<div
	class="grid bg-gradient-to-b from-neutral-800 to-neutral-600 pb-12 pt-16 text-white md:ml-10 md:h-[100svh] md:grid-cols-3"
>
	{#if $locale === 'th'}
		<div class="pl-6 md:w-11/12 xl:pl-12">
			<ul>
				<li><span class="font-bold">Open Lab:</span></li>
				<li>ชยภัทร อาชีวระงับโรค</li>
				<li>ภูมิปรินทร์ มะโน</li>
				<li>ปิยพร พงษ์ทอง</li>
				<li>พิเชษฐ์ กลั่นชื่น</li>
				<li>พัทธ์ ภัทรานุธาพร</li>
			</ul>
		</div>

		<div class="space-y-6 p-6 md:w-11/12 md:p-0">
			<ul>
				<li><span class="font-bold">Co-creator:</span></li>
				<li>พิเชษฐ์ กลั่นชื่น</li>
				<li>พัทธ์ ภัทรานุธาพร</li>
			</ul>

			<ul>
				<li><span class="font-bold">Choreographer/Director:</span></li>
				<li>พิเชษฐ์ กลั่นชื่น</li>
			</ul>

			<ul>
				<li><span class="font-bold">Dancers:</span></li>
				<li>ผดุง จุมพันธ์</li>
				<li>ธรรศ จงจัดกลาง</li>
				<li>Chang Hong Chung</li>
				<li>King Fai Tsang</li>
			</ul>

			<ul>
				<li><span class="font-bold">Music Director and Composer:</span></li>
				<li>ลำธาร หาญตระกูล</li>
			</ul>

			<ul>
				<li><span class="font-bold">3D and Animation Creator:</span></li>
				<li>ปิยพร พงษ์ทอง</li>
			</ul>
		</div>

		<div class="space-y-6 p-6 md:w-11/12 md:p-0">
			<ul>
				<li><span class="font-bold">Creative Technologist:</span></li>
				<li>ภูมิปรินทร์ มะโน</li>
				<li>ชยภัทร อาชีวระงับโรค</li>
			</ul>
			<ul>
				<li><span class="font-bold">Cyborg Scientist and Philosopher:</span></li>
				<li>พัทธ์ ภัทรานุธาพร</li>
			</ul>

			<ul>
				<li><span class="font-bold">Lighting Designer:</span></li>
				<li>Ray Tseng</li>
			</ul>

			<ul>
				<li><span class="font-bold">Dramaturg:</span></li>
				<li>How Ngean Lim</li>
			</ul>

			<ul>
				<li><span class="font-bold">Producer:</span></li>
				<li>โศจิรัตน์ สิงหลกะ</li>
			</ul>

			<ul>
				<li><span class="font-bold">Stage Manager:</span></li>
				<li>จิรัช เอี่ยมสะอาด</li>
			</ul>
		</div>
	{:else}
		<div class="pl-6 md:w-11/12 xl:pl-12">
			<ul>
				<li><span class="font-bold">Open Lab:</span></li>
				<li>Chayapatr Archiwaranguprok</li>
				<li>Phoomparin Mano</li>
				<li>Piyaporn Bhongse-tong</li>
				<li>Pichet Klunchun</li>
				<li>Pat Pataranutaporn</li>
			</ul>
		</div>

		<div class="space-y-6 p-6 md:w-11/12 md:p-0">
			<ul>
				<li><span class="font-bold">Co-creator:</span></li>
				<li>Pichet Klunchun</li>
				<li>Pat Pataranutaporn</li>
			</ul>

			<ul>
				<li><span class="font-bold">Choreographer/Director:</span></li>
				<li>Pichet Klunchun</li>
			</ul>

			<ul>
				<li><span class="font-bold">Dancers:</span></li>
				<li>Padung Jumpan</li>
				<li>Tas Chongchadklang</li>
				<li>Chang Hong Chung</li>
				<li>King Fai Tsang</li>
			</ul>

			<ul>
				<li><span class="font-bold">Music Director and Composer:</span></li>
				<li>Lamtharn Hantrakul</li>
			</ul>

			<ul>
				<li><span class="font-bold">3D and Animation Creator:</span></li>
				<li>Piyaporn Bhongse-tong</li>
			</ul>
		</div>

		<div class="space-y-6 p-6 md:w-11/12 md:p-0">
			<ul>
				<li><span class="font-bold">Creative Technologist:</span></li>
				<li>Phoomparin Mano</li>
				<li>Chayapatr Archiwaranguprok</li>
			</ul>
			<ul>
				<li><span class="font-bold">Cyborg Scientist and Philosopher:</span></li>
				<li>Pat Pataranutaporn</li>
			</ul>

			<ul>
				<li><span class="font-bold">Lighting Designer:</span></li>
				<li>Ray Tseng</li>
			</ul>

			<ul>
				<li><span class="font-bold">Dramaturg:</span></li>
				<li>How Ngean Lim</li>
			</ul>

			<ul>
				<li><span class="font-bold">Producer:</span></li>
				<li>Sojirat Singholka</li>
			</ul>

			<ul>
				<li><span class="font-bold">Stage Manager:</span></li>
				<li>Jirach Eaimsa-Ard</li>
			</ul>
		</div>
	{/if}
</div>
