import { SvelteComponentTyped } from "svelte";
import type { DisplayTag, QRCodeErrorCorrectionLevel } from "./util";
declare const __propDef: {
    props: {
        text?: string | undefined;
        generator?: "node-qrcode" | undefined;
        /** @deprecated use displayType instead */ tagType?: DisplayTag | undefined;
        displayType?: DisplayTag | undefined;
        displayWidth?: number | undefined;
        displayHeight?: number | undefined;
        displayStyle?: string | undefined;
        altText?: string | undefined;
        displayID?: string | undefined;
        displayClass?: string | undefined;
        margin?: number | undefined;
        scale?: number | undefined;
        width?: number | undefined;
        errorCorrectionLevel?: QRCodeErrorCorrectionLevel | undefined;
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
