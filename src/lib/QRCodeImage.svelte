<script lang="ts">
    import {onMount} from "svelte";

    import QRCodeGenerator, {QRCodeErrorCorrectionLevel} from 'qrcode';

    import type {QRCodeImageGeneratorSelection} from "./util";

    // required parameters
    export let text:string = "Hello World";
    export let generator:QRCodeImageGeneratorSelection = "node-qrcode";

    // parameters for the <img> tag
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

    export function getImageURL():string {
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
            .toDataURL(
                text,
                {
                    margin: margin,
                    scale: scale,
                    width: width,
                    errorCorrectionLevel: errorCorrectionLevel,
                    version: version
                }
            )
            .then(url => { _generatedImgURL = url;});
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