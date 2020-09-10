import {ExamplesViewBase} from "../viewBase.js";
import {data} from "./data.js";

export default class ListenOn extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        this.setProperty("people", [...data]);
        super.load();
    }
}