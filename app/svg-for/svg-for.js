import {ExamplesViewBase} from "../viewBase.js";
import {createRectangles} from "./data-factory.js";

export default class SvgView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    preLoad() {
        this.setProperty("rectangles", createRectangles(6));
    }

    load() {
        crsbinding.data.updateUI(this, "rectangles");
        super.load();
    }

    update() {
        if (this.interval) return;

        const rectangles = this.getProperty("rectangles");

        this.interval = setInterval(() => {
            for (let rect of rectangles) {
                rect.width = Math.floor(Math.random() * (100 - 0));
                crsbinding.data.updateUI(rect);
            }
        }, 500);
    }

    stop() {
        clearInterval(this.interval);
        delete this.interval;
    }
}