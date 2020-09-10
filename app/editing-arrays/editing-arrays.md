# Editing Arrays

## Introduction

This example pivots around manipulating arrays but has some additional goodies.    
Display a list of people.  
Add a new person to the list.  
Edit a selected person in the list.  
Delete selected people from the list.  

For the editing we are using a custom web component called person-component.  
This component was build to be isolated from everything else to demonstrate how we can work with decoupled parts.
The component is self managing, showing and hiding itself as required.

When changes have been made, those changes are send back to the origin for further use.  
The origin is responsible for inserting or updating as required.

## Event aggregation

crs binding has an event aggregation system exposed at `crsbinding.events.emitter`.  
See the `crs-binding-documentation` repo for more details.  
In this example we are using postMessage as we can send a message to a target element.  
As part of the message we pass on a callback function that `person-component` will use to communicate back with.
You can also use `emit` for a more decoupled solution using some convention to ensure communication flow back and forth.  
For example:

1. "edit-person" - send person data to component
1. "edit-person-response" - send data from component back to origin

In this example however we use postMessage and thus the callback facilitating the communication channel.

## Events

You can bind to any event raised by an element.  
In this example we use the click event on buttons to call functions in our binding context (view model).  
See the `crs-binding-documentation` for all the different options you can use on `.call`.

In crs-binding there is a convention for property changed events.  
On the binding context create a function with the same name as your property and "Changed".  
When that property changes, that function is called passing on to you the value of that property.

person-component uses such a function called `personChanged` to determine if it sould set itself as visible or not.

## person-component visibility

The visibiity of the component id driven by a property called `isVisible` where the component is the binding context.  
Normally binding expressions are outwards, from a binding context to it's children.  
In this case however we want to specify to the binding engine that we want to use the component itself as the binding context.  
This we do by using the `$self` term in the binding expression.

```html
<person-component hidden.if="$self.isVisible != true"></person-component>
```

Using the component itself as the binding context set the hidden attribute if the isVisible property is not true.