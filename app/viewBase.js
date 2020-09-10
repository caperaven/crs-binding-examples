export class ExamplesViewBase extends crsbinding.classes.ViewBase {
    showSourceFiles() {
        const sourceURL = this.sourceUrl;
        const documentURL = sourceURL.replace(".source.js", ".md");

        import(sourceURL).then(module => {
            const array = [...module.source];
            crsbinding.data.setProperty(crsbinding.$globals, "source", array);
        });
        crsbinding.data.setProperty(crsbinding.$globals, "document", documentURL);
    }

    load() {
        this.showSourceFiles()
        super.load();
    }
}