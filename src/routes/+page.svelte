<script lang="ts">
    import QRCodeImage from "$lib/QRCodeImage.svelte";

    let currentTimestamp:string = Math.round(Date.now() / 1000).toString();

    setInterval(() => {currentTimestamp = Math.round(Date.now() / 1000).toString();}, 1000);
</script>

<main>
    <section>
        <h1>Welcome to your library project</h1>
        <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </section>

    <section>
        <QRCodeImage />
        <p>Hello World</p>
        <hr>

        <QRCodeImage text="eee" />
        <p>eee</p>
        <hr>

        <QRCodeImage text="eee" width=400 />
        <p>eee width=400</p>
        <hr>

        <QRCodeImage text="eee" scale=10 />
        <p>eee scale=10</p>
        <hr>

        <QRCodeImage text={currentTimestamp} />
        <p>dynamic: {currentTimestamp}</p>
        <hr>
    </section>
</main>
