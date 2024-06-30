<svelte:head>
    <title>QR Code Generator</title>
</svelte:head>

<script lang="ts">
    import {QRCodeImage} from "$lib";

    let inputText:string = " ";
</script>

<a href="/">back</a>

<section>
    <p>
        Input:
        <input type="text" bind:value={inputText} placeholder="type your text here">
    </p>

    <QRCodeImage displayType="img" text={inputText} width=400 displayWidth=400 />
</section>
