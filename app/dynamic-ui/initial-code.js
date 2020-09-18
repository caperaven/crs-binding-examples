const html = [
'<label>',
'    <div>First Name</div>',
'    <input value.bind="data.firstName" />',
'</label>',
'<label>',
'    <div>Last Name</div>',
'    <input value.bind="data.lastName" />',
'</label>',
'<label>',
'    <div>Age</div>',
'    <input value.bind="data.age" />',
'</label>',
'<div>${data.firstName} ${data.lastName} is ${data.age} old</div>',
'<br/>',
`<button click.setValue="[data.firstName='John'; data.lastName='Doe'; data.age=20]">Restore Default</button>`
]

const json = `
{
    "firstName": "John",
    "lastName": "Die",
    "age": 20
}
`

export function setInitialCode(element) {
    element.querySelector("#html").value = html.join("\n");
    element.querySelector("#json").value = json.trim();
}