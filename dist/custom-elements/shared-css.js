import { css } from "https://cdn.pika.dev/lit-element@2.2.1";
export const sharedBlockStyle = css `
    padding: 12px;
    margin-top: 0.5em;
    display: block;
    color: black;
    font-family: system-ui;
`;
export const deprecatedStyle = css `
    :host {
        border-left: 6px #e66465 solid;
        background: rgb(255, 203, 205);
        ${sharedBlockStyle}
    }
`;
export const recommendStyle = css `
    :host {
        border-left: 6px rgb(46, 255, 71) solid;
        background: rgb(171, 255, 181);
        ${sharedBlockStyle}
    }
`;
export const warningStyle = css `
    :host {
        border-left: 6px #f6b73c solid;
        background: #fff3d4;
        ${sharedBlockStyle};
    }
`;
//# sourceMappingURL=shared-css.js.map