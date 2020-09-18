# SVG 

## Intoduction 
This example shows a couple of svg binding examples.  
The first has to do with showing a svg in a list where you use a `<symbol>` and  `<use>` combo to show the svg.

The second animates a rectangle as values for position and size changes.
The position is set one of two ways.

1. Move the sliders 
1. Click on the canvas 

## Errors
You cannot use the standard attribute binding expression like `x="${position}"` as this will case a syntax error.  
Instead, we use the `.attr` binding syntax to achieve the same thing but prevent any syntax errors.

```
x.attr="${position}"
```

## Understanding the SVG click.setValue

This bit can be a bit confusing so lets take a bit of time to look at this part in detail.

```html
click.setValue="[position.x = $event.clientX - $data($context, 'offset').left; position.y = $event.clientY - $data($context, 'offset').left]"
```

There are two set value expressions here seperated by a ";"  
1. position.x = $event.clientX - $data($context, 'offset').left
1. position.y = $event.clientY - $data($context, 'offset').left

As you can see the first sets the x value of position, and the second the y value.  
We get the click x and y position from the event's clientX and clientY values.  
This however does not give us the position based on where you clicked on the canvas but a more global value.
To get the actual canvas position we need to remove the left and top values of the canvas's client bounding rect.

On the load function, once the UI is in place, we get the bounding rect and save it as "offset" to be used in the binding expression.

```js
const rect = this._element.querySelector(".container svg").getBoundingClientRect();
this.setProperty("offset", rect);
```

To get that value we need to get the rect from the data store and read the left and top properties.
The following code does that for us.

```js
$data($context, 'offset').left
```

The above in plain englis would read as:  
From the binding data ($data), on the current context ($context), get the object named "offset" and get the value of the "left" property. 