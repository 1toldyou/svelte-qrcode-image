<script>import QRCodeGenerator from 'qrcode';
// required parameters
export let text = "Hello World";
// parameters for the <img> tag
export let displayWidth = null; // override the default width in pixels
export let displayHeight = null; // override the default height in pixels
export let displayStyle = ""; // override the default style, default is none
export let altText = "QR Code";
// parameters that will pass to the qrcode url generator
export let margin = 4;
export let scale = 4;
export let width;
let _generatedImgURL = "";
function generateQRCode() {
    QRCodeGenerator.toDataURL(text, { margin: margin, scale: scale, width: width, }).then(url => { _generatedImgURL = url; });
}
export function getImageURL() {
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
            alt={altText}
            width={displayWidth}
            height={displayHeight}
            style={displayStyle}
    >
</div>