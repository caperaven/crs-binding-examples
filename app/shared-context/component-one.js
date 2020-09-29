class ComponentOne extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get hasOwnContext() {
        return false;
    }

    async connectedCallback() {
        this._dataId = Number(this.dataset.uid);
        await super.connectedCallback();
    }
}

customElements.define("component-one", ComponentOne);