<script lang="ts">
    import QRCodeGenerator from 'qrcode';

    // required parameters
    export let text:string = "Hello World";

    // parameters for the <img> tag
    export let displayWidth:number = null;  // override the default width in pixels
    export let displayHeight:number = null; // override the default height in pixels
    export let displayStyle:string = "";  // override the default style, default is none
    export let imgAlt:string = "QR Code";

    // parameters that will pass to the qrcode url generator
    export let margin: number | undefined;
    export let scale: number | undefined;
    export let width: number | undefined;

    let _generatedImgURL:string = "";

    function generateQRCode() {
        QRCodeGenerator.toDataURL(text, {margin: margin, scale: scale, width: width,}).then(url => { _generatedImgURL = url;});
    }

    export function getImageURL():string {
        return _generatedImgURL;
    }

    generateQRCode();

    $: {
        text = text;
        generateQRCode();
        // console.log("text changed");
    }
</script>

<div>
    <img
            src={_generatedImgURL}
            alt={imgAlt}
            width={displayWidth}
            height={displayHeight}
            style={displayStyle}
    >
</div>