class ComponentTwo extends HTMLElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    static get observedAttributes() {
        return ["data-uid"];
    }

    async attributeChangedCallback() {
        this.innerHTML = await fetch(this.html).then(result => result.text())
        crsbinding.parsers.parseElement(this, Number(this.dataset.uid));
    }
}

customElements.define("component-two", ComponentTwo);
