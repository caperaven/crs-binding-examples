import {ExamplesViewBase} from "../viewBase.js";
import {getData, getPaths} from "./data.js";

export default class RenderCollection extends ExamplesViewBase {
    get template() {
        return this._element.querySelector("#myTemplate");
    }

    get pathTemplate() {
        return this._element.querySelector("#svgTemplate")
    }

    get target() {
        return this._element.querySelector("#target");
    }

    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    async connectedCallback() {
        await super.connectedCallback();
        this.show7();
    }

    render() {
        const data = getData();
        crsbinding.utils.renderCollection(this.template, data);
    }

    renderToTarget() {
        const data = getData();
        crsbinding.utils.renderCollection(this.template, data, null, this.target);
    }

    show2() {
        this.updatePaths(2, "ff0090", 0, 300);
    }

    show5() {
        this.updatePaths(5, "0098e0", 0, 300);
    }

    show7() {
        this.updatePaths(7, "009688", 0, 300);
    }

    updatePaths(count, color, min, max) {
        const template = this.pathTemplate;
        const oldPaths = Array.from(template.parentElement.children).filter(el => el.__inflated == true);
        const data = getPaths(count, 5, min, max, color);
        crsbinding.utils.renderCollection(template, data, oldPaths.length > 0 ? oldPaths : null);
    }
}