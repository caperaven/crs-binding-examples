import {ExamplesViewBase} from "../viewBase.js";

export default class ListenOn extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    async disconnectedCallback() {
        await super.disconnectedCallback();
        this.valueChangedHandler = null;
    }

    load() {
        const valueChangedHandler = this.valueChanged.bind(this);
        this.setProperty("model", {value: "Value 1", log: []});
        crsbinding.events.listenOnPath(this, "model.value", valueChangedHandler);
        super.load();
    }

    valueChanged(property, value) {
        const array = crsbinding.data.getProperty(this, "model.log");
        array.push({message: `new value = ${value}`});
    }
}