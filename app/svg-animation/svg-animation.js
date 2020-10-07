import {ExamplesViewBase} from "../viewBase.js";

export default class SvgView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    preLoad() {
        const data = {
            p1: {
                x: 250,
                y: 250
            },
            p2: {
                x: 250,
                y: 150
            },
            p3: {
                x: 250,
                y: 110
            }
        }

        data.r1 = data.p1.y - data.p2.y;
        data.r2 = data.p2.y - data.p3.y;
        data.t1 = 0;
        data.t2 = 0;

        this.setProperty("data", data);
    }

    async connectedCallback() {
        this.updateHandler = this.update.bind(this);
        super.connectedCallback();
    }

    async disconnectedCallback() {
        this.updateHandler = null;
        super.disconnectedCallback();
    }

    update() {
        if (this.updateHandler) {
            requestAnimationFrame(this.updateHandler);
        }

        const data = this.getProperty("data");
        data.t1 += 1;

        const p2x = data.p1.x + data.r1 * Math.cos(data.t1);
        const p2y = data.p1.y + data.r1 * Math.sin(data.t1);

        this.setProperty("data.p2.x", p2x);
        this.setProperty("data.p2.y", p2y);
    }
}