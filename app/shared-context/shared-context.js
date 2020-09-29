import {ExamplesViewBase} from "../viewBase.js";
import "./component-one.js";
import "./component-two.js"

export default class SharedContext extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }
}