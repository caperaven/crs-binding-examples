import {ExamplesViewBase} from "../viewBase.js";
import "../../components/widgets-component/widgets-component.js";

export default class WidgetsComponentView extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }
}