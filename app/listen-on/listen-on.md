# Listen On

## Introduction

For the most part binding expressions take place on the HTML level.  
There are times when you want to be notified when a property changes so that you can perform some coding event.  

This example shows you how that is done using javascript.

## Scenario

The view model binding context has a property called model.  
model in turn has a property called value.  
We want to be notified when value changes so that we can populate a log with all the changes.

To listen for changes on the path `model.value` we can use `crsbinding.events.listenOnPath`.

```js
const valueChangedHandler = this.valueChanged.bind(this);
crsbinding.events.listenOnPath(this, "model.value", valueChangedHandler);
```

The `valueChanged` function is called where we add the new value to the log.

```js
valueChanged(property, value) {
    const array = crsbinding.data.getProperty(this, "model.log");
    array.push({message: `new value = ${value}`});
}
```  

As you can see above the function being called has two parameters.  
1. the property path of the value that changed
1. the new value of the property that has changed

## Printing the log

To print the log we use the standard `for` feature

```html
<ul>
    <template for="item of model.log">
        <li>${item.message}</li>
    </template>
</ul>
```