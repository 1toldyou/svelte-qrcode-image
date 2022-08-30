<script lang="ts">
    import QRCodeGenerator from 'qrcode';

    // required parameters
    export let text:string = "Hello World";

    // parameters that will pass to the qrcode url generator
    export let margin: number | undefined;
    export let scale: number | undefined;
    export let width: number | undefined;

    let _generatedImgURL:string = "";
    let imgAlt:string = "QR Code";

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
    <img src={_generatedImgURL} alt={imgAlt}>
</div>