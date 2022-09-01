<script lang="ts">
    import {onMount} from "svelte";

    import QRCodeGenerator, {QRCodeErrorCorrectionLevel} from 'qrcode';

    import type {DisplayTag, QRCodeImageGeneratorSelection} from "./util";

    // required parameters
    export let text:string = "Hello World";
    export let generator:QRCodeImageGeneratorSelection = "node-qrcode";
    export let tagType:DisplayTag = "img";

    // parameters for the <img> and <canvas> tag
    export let displayWidth:number = null;  // override the default width in pixels
    export let displayHeight:number = null; // override the default height in pixels
    export let displayStyle:string = "";  // override the default style, default is none
    export let altText:string = "QR Code";

    // parameters that will pass to the qrcode url generator
    export let margin: number = 4;
    export let scale: number = 4;
    export let width: number | undefined = undefined;
    export let errorCorrectionLevel: QRCodeErrorCorrectionLevel = "M";
    export let version: number | undefined = undefined;

    // internal variables
    let _generatedImgURL:string = "";
    let _canvasElement: HTMLCanvasElement;
    let _initialized:boolean = false;

    export function getImageURL():string {
        return _generatedImgURL;
    }

    onMount(async () => {
        switch (tagType){
            case "img":
                await _drawToImg();
                break;
            case "canvas":
                await _drawToCanvas();
                break;
            default:
                break;
        }
        _initialized = true;
    });

    $: if (_initialized) {
        text = text;
        _drawToImg();
        if (tagType === "canvas"){
            _drawToCanvas();
        }
        // console.log("text changed");
    }

    async function _drawToImg() {
        switch (generator) {
            case "node-qrcode":
                await _generateQRCodeWithNodeQRCode();
                break;
            default:
                await _generateQRCodeWithNodeQRCode();
                break;
        }
    }

    async function _generateQRCodeWithNodeQRCode() {
        _generatedImgURL = await QRCodeGenerator.toDataURL(
            text,
            {
                margin: margin,
                scale: scale,
                width: width,
                errorCorrectionLevel: errorCorrectionLevel,
                version: version
            },
        )
    }

    async function _drawToCanvas() {
        await QRCodeGenerator.toCanvas(
            _canvasElement,
            text,
            {
                margin: margin,
                scale: scale,
                width: width,
                errorCorrectionLevel: errorCorrectionLevel,
                version: version
            },
        );
    }
</script>

<div>
    {#if tagType === "img"}
        <img
                src={_generatedImgURL}
                alt={altText}
                width={displayWidth}
                height={displayHeight}
                style={displayStyle}
        >
    {:else if tagType === "canvas"}
        <canvas bind:this={_canvasElement} style={displayStyle} width={displayWidth} height={displayHeight}></canvas>
        <!-- for have some sort of alt text since <canvas> don't have the "alt" attribute -->
        <img src="" alt={altText} style="position: absolute; top: 0; left: 0; opacity: 0;">
    {/if}
</div>