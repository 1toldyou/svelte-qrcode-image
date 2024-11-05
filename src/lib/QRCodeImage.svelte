<script lang="ts">
    import { run } from 'svelte/legacy';

    import {onMount} from "svelte";

    // import QRCode from 'qrcode';
    import {QRCode} from "./util";

    import type {DisplayTag, QRCodeImageGeneratorSelection, QRCodeErrorCorrectionLevel} from "./util";

    // required parameters
    

    // attributes for the <img> and <canvas> tag
    // if it's not set, the default values should be null instead of ""

    // parameters that will pass to the qrcode url generator
    interface Props {
        text?: string;
        generator?: QRCodeImageGeneratorSelection;
        /** @deprecated use displayType instead */
        tagType?: DisplayTag;
        displayType?: DisplayTag;
        displayWidth?: number;
        displayHeight?: number;
        displayStyle?: string;
        altText?: string;
        displayID?: string;
        displayClass?: string;
        margin?: number;
        scale?: number;
        width?: number | undefined;
        errorCorrectionLevel?: QRCodeErrorCorrectionLevel;
        version?: number | undefined;
    }

    let {
        text = $bindable("Hello World"),
        generator = "node-qrcode",
        tagType = "img",
        displayType = $bindable("img"),
        displayWidth = null,
        displayHeight = null,
        displayStyle = null,
        altText = "QR Code",
        displayID = null,
        displayClass = null,
        margin = 4,
        scale = 4,
        width = undefined,
        errorCorrectionLevel = "M",
        version = undefined
    }: Props = $props();

    // internal variables
    let _generatedImgURL:string = $state("");
    let _canvasElement: HTMLCanvasElement = $state();
    let _initialized:boolean = $state(false);
    let _imgTagID:string = displayID;  // for suppress the `duplicate id reference` warning
    let _canvasTagID:string = displayID;  // for suppress the `duplicate id reference` warning

    export function getImageURL():string {
        return _generatedImgURL;
    }

    onMount(async () => {
        // downward compatibility
        if (tagType != "img") {
            displayType = "canvas";
            console.warn("please use the `displayType` instead of `tagType` for `<QRCodeImage>`");
        }
        switch (displayType){
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
        _generatedImgURL = await QRCode.toDataURL(
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
        await QRCode.toCanvas(
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
    run(() => {
        if (_initialized) {
            text = text;
            _drawToImg();
            if (displayType === "canvas"){
                _drawToCanvas();
            }
            // console.log("text changed");
        }
    });
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
{:else if displayType === "canvas"}
    <div>
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
    </div>
{/if}