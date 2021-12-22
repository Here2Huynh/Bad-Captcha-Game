<script>
	import PromptCode from '../stores/promptStore';

	// export let promptCode;
</script>

<div class="m-5 flex justify-center">
	<div class="box-content p-4 border-4 rounded-lg">
		{#if $PromptCode}
			<h1 class="text-5xl hover:blur-2xl select-none">{$PromptCode}</h1>
		{:else}
			<div class="text-5xl text-center w-32">⌛</div>
		{/if}
	</div>
</div>
