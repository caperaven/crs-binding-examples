export default class Welcome extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
    }

    load() {
        crsbinding.data.setProperty(crsbinding.$globals, "source.html", "https://github.com/caperaven/crs-binding-examples/blob/master/app/welcome/welcome.html");
        crsbinding.data.setProperty(crsbinding.$globals, "source.js", "https://github.com/caperaven/crs-binding-examples/blob/master/app/welcome/welcome.js");
        super.load();
    }
}