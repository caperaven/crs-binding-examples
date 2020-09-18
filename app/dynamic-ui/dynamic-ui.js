import {ExamplesViewBase} from "../viewBase.js";
import {setInitialCode} from "./initial-code.js";

export default class DynamicUi extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        setInitialCode(this._element);
        super.load();
    }

    update() {
        const htmlStr = this._element.querySelector("#html").value;
        const jsonStr = this._element.querySelector("#json").value;

        const json = JSON.parse(jsonStr);
        this.setProperty("data", json);

        crsbinding.events.emitter.postMessage("#preview", {
            context: this,
            html: htmlStr
        })
    }

    clear() {
        crsbinding.events.emitter.postMessage("#preview", {context: null, html: ""});
    }
}