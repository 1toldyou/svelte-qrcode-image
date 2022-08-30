<script lang="ts">
    import QRCodeImage from "$lib/QRCodeImage.svelte";

    let currentTimestamp:string = Math.round(Date.now() / 1000).toString();

    setInterval(() => {currentTimestamp = Math.round(Date.now() / 1000).toString();}, 1000);
</script>

<main>
    <section>
        <h1><s>Welcome to your library project</s></h1>
        <p><s>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</s></p>
        <p><s>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</s></p>
        <p>
            <a href="https://www.npmjs.com/package/svelte-qrcode-image">npm</a>
            &nbsp;
            <a href="https://github.com/1toldyou/svelte-qrcode-image">GitHub</a>
        </p>
    </section>

    <section>
        <QRCodeImage />
        <p>Hello World</p>
        <hr>

        <QRCodeImage text="eee" />
        <p>eee</p>
        <hr>

        <QRCodeImage text={currentTimestamp} />
        <p>dynamic: {currentTimestamp}</p>
        <hr>

        <QRCodeImage text="eee" width=300 />
        <p>eee width=300</p>
        <hr>

        <QRCodeImage text="eee" scale=10 />
        <p>eee scale=10</p>
        <hr>

        <QRCodeImage width=300 displayWidth=100 />
        <p>width=300 displayWidth=100</p>
        <hr>

        <QRCodeImage width=300 displayWidth=100 displayHeight=200 />
        <p>width=300 displayWidth=100 displayHeight=200</p>
        <hr>

        <QRCodeImage displayStyle="border-style: dotted;" />
        <p>displayStyle="border-style: dotted;"</p>
        <hr>

        <QRCodeImage imgAlt="I'm a QR Code" />
        <p>imgAlt="I'm a QR Code"</p>
        <hr>
    </section>
</main>
