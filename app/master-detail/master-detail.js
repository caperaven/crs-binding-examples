import {ExamplesViewBase} from "../viewBase.js";
import {data} from "./data.js";

export default class ListenOn extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        const people = [...data];
        this.setProperty("people", people);
        this.setProperty("selectedPerson", people[0]);
        super.load();
    }
}