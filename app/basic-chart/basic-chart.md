# Basic Chart

## Introduction

This example is on the basic side when it comes to the binding but does show that a bit of creativity can produce interesting results.  
The data structure contains two properties:

1. title
1. value

We bind these properties to data-attributes on a progress element.  
The progress element provides us with a easy way to display a bar chart.  
The two attributes that we must set on the progress are:

1. max
1. value

Since the max value is the max value in the array we need a way to get the max value from the array and store it so that we can bind against it.
The following code performs that operation for us.

```js
this.setProperty("maxValue", Math.max(...data.map(item => item.value)));
``` 

We set this value on the view model and access it in our binding using the `$parent` expression.

```html
<progress max="${$parent.maxValue}" ...>
```

Binding against the value attribute of the progress will automatically display the right progress for us without any heavy lifting from our side.
For the fun of it I also added a range element so that if you change the value on the range selector it will also update the progress.
This happens because both the range and the progress value's bind to the same value property on the item.
When the item value changes, all the UI using that property will be updated.
Move the range slider along to see the progress value update.

Since a large part of this visual is the css I have also included that file in the files section.  
For more about styling progress elements see <a href="https://css-tricks.com/html5-progress-element/" target="_blank">this smashing magazine article</a>.