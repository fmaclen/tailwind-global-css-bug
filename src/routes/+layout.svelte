<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<div class="markdown">
	{@html `<pre>
		<code>Background should be blue, not red</code>
	</pre>`}
</div>

<style lang="postcss">
	.markdown :global(pre) {
		@apply bg-red-500;
		@apply dark:bg-blue-500; /* This line triggers a warning during build */
	}
</style>
