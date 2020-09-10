import {ExamplesViewBase} from "../viewBase.js";

export default class EditingArrays extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        super.load();
    }
}