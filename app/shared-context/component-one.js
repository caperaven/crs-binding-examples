class ComponentOne extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get hasOwnContext() {
        return false;
    }

    static get observedAttributes() {
        return ["data-uid"];
    }

    attributeChangedCallback() {
        this._dataId = Number(this.dataset.uid);
        this.connectedCallback();
    }
}

customElements.define("component-one", ComponentOne);