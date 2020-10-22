import {ExamplesViewBase} from "../viewBase.js";

export default class SyncArray extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    preLoad() {
        this.setProperty("available", [
            {
                id: 0,
                title: "item 1",
                isSelected: true
            },
            {
                id: 1,
                title: "item 2",
                isSelected: true
            },
            {
                id: 2,
                title: "item 3",
                isSelected: true
            }
        ]);

        this.setProperty("syncEnabled", false);
    }

    load() {
        crsbinding.data.updateUI(this, "available");
        crsbinding.data.createArraySync(this, "available", "id", ["title"]).then(syncId => this.syncId = syncId);

        super.load()
    }

    copySelected() {
        const selected = this.getProperty("available").filter(item => item.isSelected == true).map(item => {
            return {
                id: item.id,
                title: item.title,
            }
        })

        this.setProperty("selected", selected);
        this.setProperty("hasSelected", selected.length > 0);
    }

    enableSync() {
        crsbinding.data.addArraySync(this.syncId, this, "selected");
        this.setProperty("syncEnabled", true);
    }

    disableSync() {
        crsbinding.data.removeArraySync(this.syncId, this, "selected");
        this.setProperty("syncEnabled", false);
    }
}