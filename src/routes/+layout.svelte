<script lang="ts">
  import "../app.css";
  let { children } = $props();
</script>

{@render children()}

<div class="markdown">
  {@html `<div>
		<code>All background colors are expected to be blue, red should not be visible</code>
	</div>`}
</div>

<style lang="postcss">
  .markdown {
    :global(div) {
      @apply bg-red-500 p-10;

      /* This line genreates incorrect CSS which breaks styling and throws warnings during build */
      @apply dark:bg-blue-500;
    }

    /* WORKAROUND: These styles work as expected */
    :global(code:where([data-color-theme="dark"], [data-color-theme="dark"] *)) {
      @apply bg-blue-500;
    }
  }
</style>
