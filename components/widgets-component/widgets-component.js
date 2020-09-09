import {widgets} from "./widgets.js";

class WidgetsComponent extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    preLoad(setProperty) {
        setProperty("widgets", widgets);
    }
}

customElements.define("widgets-component", WidgetsComponent);