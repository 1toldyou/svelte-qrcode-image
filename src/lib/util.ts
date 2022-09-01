export type QRCodeImageGeneratorSelection = "node-qrcode";

export type QRCodeErrorCorrectionLevel = "L" | "M" | "Q" | "H";

export type DisplayTag = "img" | "canvas";

export { default as QRCode } from "qrcode"