import {ExamplesViewBase} from "../viewBase.js";
import {getData} from "./data.js";

export default class RenderCollection extends ExamplesViewBase {
    get template() {
        return this._element.querySelector("#myTemplate");
    }

    get target() {
        return this._element.querySelector("#target");
    }

    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    render() {
        const data = getData();
        crsbinding.utils.renderCollection(this.template, data);
    }

    renderToTarget() {
        const data = getData();
        crsbinding.utils.renderCollection(this.template, data, true, this.target);
    }
}