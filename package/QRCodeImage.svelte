<script>import QRCodeGenerator from 'qrcode';
// required parameters
export let text = "Hello World";
// parameters that will pass to the qrcode url generator
export let margin;
export let scale;
export let width;
let _generatedImgURL = "";
let imgAlt = "QR Code";
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
    <img src={_generatedImgURL} alt={imgAlt}>
</div>