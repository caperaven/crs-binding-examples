import {ExamplesViewBase} from "../viewBase.js";

export default class Canvas extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        const canvas = this._element.querySelector("canvas");
        this.ctx = canvas.getContext("2d");
        this.ctx.fillStyle = "#ff0080";

        this.rect = canvas.getBoundingClientRect();
        super.load();
    }

    draw(event) {
        if (this.getProperty("mouseState.isDown") != true) {
           return;
        }

        this.ctx.beginPath();
        this.ctx.clearRect(0, 0, this.ctx.canvas.offsetWidth, this.ctx.canvas.offsetHeight);
        const startPos = this.getProperty("startPos");
        const mousePos = this.getProperty("mousePos");

        this.ctx.rect(startPos.x - this.rect.left, startPos.y - this.rect.top, mousePos.x - startPos.x, mousePos.y - startPos.y);
        this.ctx.fill();
    }
}
