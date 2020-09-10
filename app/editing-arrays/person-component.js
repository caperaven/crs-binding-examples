class PersonComponent extends crsbinding.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    async disconnectedCallback() {
        this.callback = null;
        await super.disconnectedCallback();
    }

    onMessage(args) {
        this.setProperty("person", Object.assign({}, args.person));
        this.callback = args.callback;
    }

    accept() {
        const form = this.querySelector("form");
        const isValid = form.checkValidity();

        if (isValid) {
            this.callback(this.getProperty("person"));
            this.close();
        }
        else {
            form.reportValidity();
        }
    }

    close() {
        this.callback = null;
        this.setProperty("person", null);
    }

    personChanged(value) {
        this.setProperty("isVisible", value == null ? false : true);

        if (value) {
            this.querySelector("#edtFirstName").focus();
        }
    }
}

customElements.define("person-component", PersonComponent);