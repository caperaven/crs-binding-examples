# Canvas

## Introduction

In this example we are going to draw a rectangle on a canvas.  
The rectangle starts at the position when you press and hold the left mouse button.  
As you move the mouse it calculates the width and height and draws the rectangle.

Most of the stuff in this demo is the same as the other demos but let us look at how we put this together.

Drawing only takes place when the left mouse button is down.  
This is done by setting the `mouseState.isDown` property to true.

## Bindings

We need a couple of mouse events to set values for us.

```html
mousemove.setValue="mousePos={x: $event.clientX, y: $event.clientY}"
mousemove.call="draw"
mousedown.setValue="[startPos={x: $event.clientX, y: $event.clientY}; mouseState.isDown = true]"
mouseup.setValue="mouseState.isDown = false">
```

1. On mouse down set startPos and register that the mouse is down.
1. On mouse up set the mouse is down to false
1. On moving the mouse register the mouse position
1. On mouse move also call the draw function on the context to perform the drawing operation

Please note the following line.

```
mousedown.setValue="[startPos={x: $event.clientX, y: $event.clientY}; mouseState.isDown = true]"
```

In this setValue we are executing two expressions.    
This is indicated by starting the expression with a "[".  
Each expression is separated by a ";"  

Thus expression 1 is:   
```startPos={x: $event.clientX, y: $event.clientY}```

and expression 2 is:
```mouseState.isDown = true```

## Javascript bits not note.

1. The load function initialises our drawing context and gets the getBoundingClientRect to use during drawing.
1. clientX and clientY on the event does not give you a true x, and y position on canvas. Subtract the rect position values for accurate drawing.

```js
this.ctx.rect(startPos.x - this.rect.left, startPos.y - this.rect.top, mousePos.x - startPos.x, mousePos.y - startPos.y);
```