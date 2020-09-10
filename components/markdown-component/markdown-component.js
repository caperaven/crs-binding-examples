import "./marked.min.js";

class MarkdownComponent extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    onMessage(args) {
        const url = crsbinding.data.globals.document;

        if (url == null) return;

        fetch(url)
            .then(result => result.text())
            .then(html => this.setProperty("document", marked(html)))
    }

    close() {
        this.setProperty("document", null);
        this.querySelector("article").scrollTop = 0;
    }
}

customElements.define("markdown-component", MarkdownComponent);