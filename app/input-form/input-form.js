import {ExamplesViewBase} from "../viewBase.js";

export default class InputForm extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        this.setProperty("person", {firstName: "John", lastName: "Doe", age: 20});
        super.load();
    }
}