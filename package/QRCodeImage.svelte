<script>import QRCodeGenerator from 'qrcode';
export let content = "Hello World";
let _generatedImgURL = "";
let imgAlt = "QR Code";
QRCodeGenerator.toDataURL(content).then(url => { _generatedImgURL = url; });
</script>

<div>
    <img src={_generatedImgURL} alt={imgAlt}>
</div>