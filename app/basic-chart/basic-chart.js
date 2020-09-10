import {ExamplesViewBase} from "../viewBase.js";
import {data} from "./data.js";

export default class EditingArrays extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        const displayData = [...data];
        this.setProperty("maxValue", Math.max(...data.map(item => item.value)));
        this.setProperty("items", displayData);
        super.load();
    }
}