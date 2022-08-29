import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        content?: string | undefined;
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
}
export {};
