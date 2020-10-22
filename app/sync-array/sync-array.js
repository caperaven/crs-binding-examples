import {ExamplesViewBase} from "../viewBase.js";

export default class SyncArray extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }
}