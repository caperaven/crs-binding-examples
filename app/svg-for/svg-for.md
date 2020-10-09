# SVG For

## Introduction

This example loops through an array of data and generates svg content based on that array of data.    
There are two examples.

The top svg uses `for.once` and is thus static.  
After the svg is created it's static can't be changed by data changes.  
This is great for data that does not change and has a very low overhead.  
The svg gets created, and you are done.

The bottom svg will respond to data changes and uses a standard `for` expression.

## Note

Consider the following html

```html
<svg width="100" height="200" style="background: #dadada" xmlns="http://www.w3.org/2000/svg">
    <template for.once="rect of rectangles">
        <rect x.attr="rect.x" y.attr="rect.y" width.attr="rect.width" height.attr="rect.height" style="fill: blue"></rect>
    </template>
</svg>
```

SVG does not play nice with templates.  
For consistency, crs-binding allows you to use templates in svg the same as you would any other place.  
There is just one catch. Your template should only contain one element in svg.  
In the above case that is simple enough but if you want a composite design you will need to wrap it in a `<g></g>` element.

```html
<template ...>
    <g>
        ... stuff
    </g>
</template>
```

## Dynamic SVG

Most of the stuff is pretty self-explanatory.   

1. Step 1: update the data
1. Step 2: update the UI

The UI for these items do not update automatically.   
When you are ready you need to call `crsbinding.data.updateUI` for the object you want updated.  
This allows you to make all the changes you need to make to the data and only update the UI when you are ready.

```js
for (let rect of rectangles) {
    rect.width = this._getRandomWidth(10, 100);
    crsbinding.data.updateUI(rect);
}
```

If you look at the svg view model html you will notice the transform binding on the dynamic svg.

```html
style.transform.one-way="`translate(${rect.x}px, ${rect.y}px)`"
```

The syntax here is important in that you must define the string literal quotations " ` ".  
In addition, see the <a target="_blank" href="https://github.com/caperaven/crs-binding-documentation/blob/master/3.%20binding-expressions.md#style-transforms">style transform documentation</a>.

Please note that all transitions are managed through css.   
Using css combined with svg provides you with a great deal of flexibility on tweening and rendering.

## Performance
This example does not have a lot of items.  
Updating the dat and UI still gives you 60 frames per second.  
There are limits to this though.  
The more svg you update the slower things get, and the rendering cost is the thing that kills you.

Only call `updateUI` on svg that is actually visible.  
If the rect falls outside the bound of the SVG, don't update it.

This is not meant to be a solution for rendering thousands of items and have them update in real time.  
If that is what you want to do you will need to write a custom component that has all the optimizations you need.

Some things for you to think about.

1. Maintain a list of visible data to render using the `for`. The less you render, the faster your initial load time.
1. Update values on idle time if you can using `crsbinding.idleTaskManager.add(function)`.
1. Only update items that are visible.

In short minimize your dom impact.

 