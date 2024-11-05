<svelte:head>
    <title>QR Code Generator</title>
</svelte:head>

<script lang="ts">
    import QRCodeImage from "$lib/QRCodeImage.svelte";
    import {onMount} from "svelte";

    let inputText:string = $state(" ");

    onMount(async () =>{
        inputText = "";
    })
</script>

<a href="/">back</a>

<section>
    <QRCodeImage displayType="canvas" text={inputText} />

    <input type="text" bind:value={inputText} placeholder="type your text here">
</section>