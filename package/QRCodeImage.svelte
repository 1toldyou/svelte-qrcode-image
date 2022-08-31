<script>import { onMount } from "svelte";
import QRCodeGenerator, { QRCodeErrorCorrectionLevel } from 'qrcode';
// required parameters
export let text = "Hello World";
export let generator = "node-qrcode";
// parameters for the <img> tag
export let displayWidth = null; // override the default width in pixels
export let displayHeight = null; // override the default height in pixels
export let displayStyle = ""; // override the default style, default is none
export let altText = "QR Code";
// parameters that will pass to the qrcode url generator
export let margin = 4;
export let scale = 4;
export let width = undefined;
export let errorCorrectionLevel = "M";
export let version = undefined;
// internal variables
let _generatedImgURL = "";
export function getImageURL() {
    return _generatedImgURL;
}
onMount(() => {
    _generateQRCode();
});
$: {
    text = text;
    _generateQRCode();
    // console.log("text changed");
}
function _generateQRCode() {
    switch (generator) {
        case "node-qrcode":
            _generateQRCodeWithNodeQRCode();
            break;
        default:
            _generateQRCodeWithNodeQRCode();
            break;
    }
}
function _generateQRCodeWithNodeQRCode() {
    QRCodeGenerator
        .toDataURL(text, {
        margin: margin,
        scale: scale,
        width: width,
        errorCorrectionLevel: errorCorrectionLevel,
        version: version
    })
        .then(url => { _generatedImgURL = url; });
}
</script>

<div>
    <img
            src={_generatedImgURL}
            alt={altText}
            width={displayWidth}
            height={displayHeight}
            style={displayStyle}
    >
</div>