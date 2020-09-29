import {ExamplesViewBase} from "../viewBase.js";

export default class SharedContext extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    async connectedCallback() {
        await super.connectedCallback();
        await import("./component-one.js");
        await import("./component-two.js");
    }
}