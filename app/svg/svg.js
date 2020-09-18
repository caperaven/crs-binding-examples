import {ExamplesViewBase} from "../viewBase.js";
import "../../components/svg-component/svg-component.js";

export default class SvgView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }
}