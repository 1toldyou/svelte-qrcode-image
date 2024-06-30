// Reexport your entry components here

export {default as QRCodeImage} from "./QRCodeImage.svelte";



export enum QRCodeImageGeneratorSelection {
    node_qrcode = "node-qrcode",
    nuintun_qrcode = "@nuintun/qrcode"
}

export type QRCodeErrorCorrectionLevel = "L" | "M" | "Q" | "H";

export type DisplayTag = "img";
