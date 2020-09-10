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
                this.getProperty("people").push(result);
            }
        })
    }

    editPerson() {
        const person = this.getProperty("people").find(person => person.isSelected == true);
        if (person != null) {
            crsbinding.events.emitter.postMessage("person-component", {
                person: person,
                callback: result => {
                    Object.assign(person, result);
                    crsbinding.data.updateUI(person);
                }
            })
        }
    }

    deletePerson() {
        const people = this.getProperty("people");
        const selected = people.filter(person => person.isSelected == true);

        for (let person of selected) {
            people.splice(people.indexOf(person), 1);
        }
    }
}