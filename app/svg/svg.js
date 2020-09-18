import {ExamplesViewBase} from "../viewBase.js";
import "../../components/svg-component/svg-component.js";

export default class SvgView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    preLoad() {
        this.setProperty("position.x", 100);
        this.setProperty("position.y", 100);
        this.setProperty("size", 50);
    }

    load() {
        const rect = this._element.querySelector(".container svg").getBoundingClientRect();
        this.setProperty("offset", rect);
        super.load();
    }
}