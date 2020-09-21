import {ExamplesViewBase} from "../viewBase.js";

export default class TabSheetView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        this.setProperty("tab", "tab1");
        super.load();
    }
}