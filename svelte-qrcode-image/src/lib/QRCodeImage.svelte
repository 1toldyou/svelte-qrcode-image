<script lang="ts">
    import {Byte, Encoder} from "@nuintun/qrcode";

    import type {DisplayTag, QRCodeErrorCorrectionLevel} from "./index";
    import {QRCodeImageGeneratorSelection} from "./index";

    // required parameters
    export let text: string;
    export let generator: QRCodeImageGeneratorSelection = QRCodeImageGeneratorSelection.nuintun_qrcode;
    export let displayType: DisplayTag = "img";

    // attributes for the <img> and <canvas> tag
    // if it's not set, the default values should be null instead of ""
    export let displayWidth: number = null;  // override the default width in pixels
    export let displayHeight: number = null; // override the default height in pixels
    export let displayStyle: string = null;  // override the default style, default is null
    export let altText: string = "QR Code";
    export let displayID: string = null;  // if its null, then the rendered element will not have an id with no value
    export let displayClass: string = null;  // if its null, then the rendered element will not have a class with no value

    // parameters that will pass to the qrcode url generator
    export let margin: number = 4;
    export let scale: number = 4;
    export let width: number | undefined = undefined;
    export let errorCorrectionLevel: QRCodeErrorCorrectionLevel = "M";
    export let version: number | undefined = undefined;

    // internal variables
    let _generatedImgURL:string = "";
    let _canvasElement: HTMLCanvasElement;
    let _initialized: boolean = false;
    let _imgTagID: string = displayID;  // for suppress the `duplicate id reference` warning
    let _canvasTagID: string = displayID;  // for suppress the `duplicate id reference` warning
    let _encoder = new Encoder({level: errorCorrectionLevel});

    export function getImageURL():string {
        return _generatedImgURL;
    }

    async function _drawToImg() {
        switch (generator) {
            case QRCodeImageGeneratorSelection.nuintun_qrcode:
            default:
                await _generateQRCodeWithNuintunQRCode();
                break;
        }
    }

    // async function _generateQRCodeWithNodeQRCode() {
    //     _generatedImgURL = await QRCode.toDataURL(
    //         text,
    //         {
    //             margin: margin,
    //             scale: scale,
    //             width: width,
    //             errorCorrectionLevel: errorCorrectionLevel,
    //             version: version
    //         },
    //     )
    // }

    async function _generateQRCodeWithNuintunQRCode() {
        _generatedImgURL = _encoder.encode(new Byte(text)).toDataURL(width, {margin: margin});
    }

    $:{
        if (text.length > 0){
            _drawToImg();
        }
    }
</script>

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
    {:else}
    <p>Invalid displayType "{displayType}"</p>
{/if}
