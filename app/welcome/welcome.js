import {ExamplesViewBase} from "../viewBase.js";

export default class Welcome extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }
}