export default class ListenOn extends crsbinding.classes.ViewBase {
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

    valueChanged() {
        const value = crsbinding.data.getProperty(this, "model.value");
        const array = crsbinding.data.getProperty(this, "model.log");
        array.push({message: `new value = ${value}`});
    }
}