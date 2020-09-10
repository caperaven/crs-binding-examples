import {ExamplesViewBase} from "../viewBase.js";
import {data} from "./data.js";
import "./person-component.js";

export default class EditingArrays extends ExamplesViewBase {
    get sourceUrl() {
        return import.meta.url.replace(".js", ".source.js");
    }

    load() {
        const people = [...data];
        this.setProperty("people", people);
        super.load();
    }

    addPerson() {
        const person = {
            firstName: "",
            lastName: "",
            age: ""
        }

        crsbinding.events.emitter.postMessage("person-component", {
            person: person,
            callback: result => {
                console.log(result)
            }
        })
    }

    editPerson() {

    }

    deletePerson() {

    }
}