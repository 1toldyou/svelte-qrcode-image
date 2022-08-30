<script lang="ts">
    import QRCodeImage from "$lib/QRCodeImage.svelte";
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<QRCodeImage />
<p>Hello World</p>

<QRCodeImage content="eee" />
<p>eee</p>

<QRCodeImage content="eee" width=400 />
<p>eee width=400</p>

<QRCodeImage content="eee" scale=10 />
<p>eee scale=10</p>
