class SourceLinks extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }
}

customElements.define("source-links", SourceLinks);