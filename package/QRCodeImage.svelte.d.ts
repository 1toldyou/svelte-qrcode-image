import { SvelteComponentTyped } from "svelte";
import QRCodeGenerator from 'qrcode';
declare const __propDef: {
    props: {
        text?: string | undefined;
        generator?: "node-qrcode" | undefined;
        displayWidth?: number | undefined;
        displayHeight?: number | undefined;
        displayStyle?: string | undefined;
        altText?: string | undefined;
        margin?: number | undefined;
        scale?: number | undefined;
        width?: number | undefined;
        errorCorrectionLevel?: QRCodeGenerator.QRCodeErrorCorrectionLevel | undefined;
        version?: number | undefined;
        getImageURL?: (() => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type QrCodeImageProps = typeof __propDef.props;
export declare type QrCodeImageEvents = typeof __propDef.events;
export declare type QrCodeImageSlots = typeof __propDef.slots;
export default class QrCodeImage extends SvelteComponentTyped<QrCodeImageProps, QrCodeImageEvents, QrCodeImageSlots> {
    get getImageURL(): () => string;
}
export {};
