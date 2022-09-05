<script>import { onMount } from "svelte";
// import QRCode from 'qrcode';
import { QRCode } from "./util";
// required parameters
export let text = "Hello World";
export let generator = "node-qrcode";
/** @deprecated use displayType instead */
export let tagType = "img";
export let displayType = "img";
// attributes for the <img> and <canvas> tag
// if it's not set, the default values should be null instead of ""
export let displayWidth = null; // override the default width in pixels
export let displayHeight = null; // override the default height in pixels
export let displayStyle = null; // override the default style, default is null
export let altText = "QR Code";
export let displayID = null; // if its null, then the rendered element will not have an id with no value
export let displayClass = null; // if its null, then the rendered element will not have a class with no value
// parameters that will pass to the qrcode url generator
export let margin = 4;
export let scale = 4;
export let width = undefined;
export let errorCorrectionLevel = "M";
export let version = undefined;
// internal variables
let _generatedImgURL = "";
let _canvasElement;
let _initialized = false;
let _imgTagID = displayID; // for suppress the `duplicate id reference` warning
let _canvasTagID = displayID; // for suppress the `duplicate id reference` warning
export function getImageURL() {
    return _generatedImgURL;
}
onMount(async () => {
    // downward compatibility
    if (tagType != "img") {
        displayType = "canvas";
        console.warn("please use the `displayType` instead of `tagType` for `<QRCodeImage>`");
    }
    switch (displayType) {
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
    if (displayType === "canvas") {
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
    _generatedImgURL = await QRCode.toDataURL(text, {
        margin: margin,
        scale: scale,
        width: width,
        errorCorrectionLevel: errorCorrectionLevel,
        version: version
    });
}
async function _drawToCanvas() {
    await QRCode.toCanvas(_canvasElement, text, {
        margin: margin,
        scale: scale,
        width: width,
        errorCorrectionLevel: errorCorrectionLevel,
        version: version
    });
}
</script>

<div>
    {#if displayType === "img"}
        <img
                src={_generatedImgURL}
                alt={altText}
                width={displayWidth}
                height={displayHeight}
                style={displayStyle}
                id={_imgTagID}
                class={displayClass}
        >
    {:else if displayType === "canvas"}
        <canvas
                bind:this={_canvasElement}
                style={displayStyle}
                width={displayWidth}
                height={displayHeight}
                id={_canvasTagID}
                class={displayClass}
        ></canvas>
        <!-- for have some sort of alt text since <canvas> don't have the "alt" attribute -->
        <img src="" alt={altText} style="position: absolute; top: 0; left: 0; opacity: 0;">
    {/if}
</div>