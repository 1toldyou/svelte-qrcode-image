<svelte:head>
    <title>Svelte-QRCode-Image</title>
</svelte:head>

<script lang="ts">
    import QRCodeImage from "$lib/QRCodeImage.svelte";

    let currentTimestamp:string = Math.round(Date.now() / 1000).toString();

    setInterval(() => {currentTimestamp = Math.round(Date.now() / 1000).toString();}, 1000);
</script>

<main>
    <section>
        <h1>Svelte-QRCode-Image</h1>
        <p>As a Svelte component, takes string as input and render QR Code image and display it</p>
        <p>Written in TypeScript and works with SvelteKit</p>
        <p>
            visit our
            <a href="https://www.npmjs.com/package/svelte-qrcode-image">npm</a>
            page or
            <a href="https://github.com/1toldyou/svelte-qrcode-image">GitHub</a>
            for latest README file
        </p>
    </section>

    <section>
        <QRCodeImage />
        <p>Hello World</p>
        <hr>

        <QRCodeImage displayID="your-element" displayClass="your-class" />
        <p>displayID="your-element" displayClass="your-class"</p>
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

        <QRCodeImage altText="I'm a QR Code" />
        <p>altText="I'm a QR Code"</p>
        <hr>

        <QRCodeImage errorCorrectionLevel="L" />
        <p>errorCorrectionLevel="L"</p>
        <hr>

        <QRCodeImage errorCorrectionLevel="H" />
        <p>errorCorrectionLevel="H"</p>
        <hr>

        <QRCodeImage tagType="img" displayLoading="lazy" />
        <p>tagType="img" displayLoading="lazy"</p>
        <hr>

        <QRCodeImage tagType="canvas" />
        <p>tagType="canvas"</p>
        <hr>

        <QRCodeImage tagType="canvas" displayID="i-have-id-too" displayClass="i-have-class-too" />
        <p>tagType="canvas" displayID="i-have-id-too" displayClass="i-have-class-too"</p>
        <hr>

        <QRCodeImage tagType="canvas" displayStyle="border-style: dotted;" />
        <p>tagType="canvas" displayStyle="border-style: dotted;"</p>
        <hr>

        <QRCodeImage tagType="canvas" text={currentTimestamp} />
        <p>tagType="canvas" dynamic: {currentTimestamp}</p>
        <hr>

        <QRCodeImage tagType="canvas" displayStyle="border-style: dotted;" displayWidth=400 />
        <p>tagType="canvas" displayStyle="border-style: dotted;" displayWidth=400</p>
        <hr>

        <QRCodeImage tagType="canvas" displayStyle="border-style: dotted;" width=500 displayWidth=400 />
        <p>tagType="canvas" displayStyle="border-style: dotted;" width=500 displayWidth=400</p>
        <hr>
    </section>
</main>
