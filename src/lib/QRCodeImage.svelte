<script lang="ts">
    import QRCodeGenerator from 'qrcode';

    let _generatedImgURL:string = "";
    let imgAlt:string = "QR Code";

    QRCodeGenerator.toDataURL('Hello World').then(url => { _generatedImgURL = url;});
</script>

<img src={_generatedImgURL} alt={imgAlt}>