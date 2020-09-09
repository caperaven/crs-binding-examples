export class ExamplesViewBase extends crsbinding.classes.ViewBase {
    showSourceFiles() {
        import(this.sourceUrl).then(module => {
            const array = [...module.source];
            crsbinding.data.setProperty(crsbinding.$globals, "source", array);
        })
    }

    load() {
        this.showSourceFiles()
        super.load();
    }
}