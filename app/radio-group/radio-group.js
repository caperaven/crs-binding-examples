import {ExamplesViewBase} from "../viewBase.js";

export default class RadioGroup extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    async preLoad() {
        this.setProperty("people", [{value: "John"}, {value: "Samantha"}, {value: "Rodger"},{value: "Mike"}]);
        this.setProperty("selectedPerson", "Samantha");

        this.setProperty("animals", [{value: "Dog"}, {value: "Cat"}, {value: "Rat"},{value: "Donkey"}]);
        this.setProperty("selectedAnimal", "Donkey");
    }
}