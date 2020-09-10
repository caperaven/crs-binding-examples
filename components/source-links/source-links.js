class SourceLinks extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    showDocs() {
        crsbinding.events.emitter.postMessage("markdown-component");
    }
}

customElements.define("source-links", SourceLinks);