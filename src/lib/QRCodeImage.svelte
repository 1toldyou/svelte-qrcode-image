<script lang="ts">
    import QRCodeGenerator from 'qrcode';

    export let content:string = "Hello World";

    let _generatedImgURL:string = "";
    let imgAlt:string = "QR Code";

    QRCodeGenerator.toDataURL(content).then(url => { _generatedImgURL = url;});
</script>

<div>
    <img src={_generatedImgURL} alt={imgAlt}>
</div>