# Import Form

## Introduction

Input form is a very simple example of using the binding engine to connect data to UI.  
The load function starts off by defining the data we want to use.

```js
this.setProperty("person", {firstName: "John", lastName: "Doe", age: 20});
```

The inputs define what data property is bound to what input control.

```html
<input value.bind="person.firstName" />
```