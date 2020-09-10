# Master Detail 

## Introduction
This example highlights a couple more "advanced" features along with some potential pitfalls.  
On the left you have a list of people.  
On the right you have the selected person's details.
The details on the right is editable.

When selecting a person on the left you want to see that person's details on the right for editing.  
When editing the first and last name, you want to also see the name in the list update with the new changes.

Some people have contact details.  
The quantity of the contact details may differ from person to person.
If a person does not have contact details text indicating that should display.  

## Selecting a person
The details on the right binds to an object called `selectedPerson`.  
When clicking on a person on the left, `selectedPerson` is set.  
See the `ul` for details, you will see an expression like this:

```html
<ul click.setValue="selectedPerson = $data($event.target.dataset.uid)">
```

Let's look at what this expression is doing.
Keywords:
1. $event - mouse event parameter
1. $data - get me the data from the binding data store for an object with this id, equivalent to `crsbinding.data.getValue`
1. $parent - reference to the original context

When rendering a collection using the `template for`, each item will get an uid that identifies that UI element with a data context in the binding engine.  
We can use that to get the data for the element we clicked on.

If you had to describe the above expression in english it could read like this:

`
When you click on the UL, set the property selectedPerson to the object in the binding store that has the id as defined by the target's data-uid attribute value.
` 

## Timing problem on setting the default selected item
We want set the default selectedPerson to the first item in the people collection.
If that was all we wanted to do we could have set that in the load function like this:

```js
this.setProperty("selectedPerson", data[0]);
```

That is however not the end of it, what we also want is that when you edit the first and last name, the list will reflect those changes.  
This makes things a bit more tricky.
The binding engine does not know the source of selectedPerson and thus does not know what to update when those values change.  
This is where `makeShared` comes in. We will look at that in more depth later.
The other issue we have is that the list must be finished rendering so that we know what list element to update.  

The call feature in crsbinding allows us to solve this problem.  
When the list has been rendered, the container element will raise an event called `rendered`.  
We can listen for that event and then call a defined function in our rendering context. In this case the view model.

```html
<ul rendered.call="peopleRendered"></ul>
```

In this function we will set the selectedPerson.

```js
this.setProperty("selectedPerson", this.getProperty("people")[0]);
```

At this stage all the required hooks are in place to share changes between the different UI components.

## Make shared

In this example I want changes made in one place to reflect in other places.  
This is where `makeShared` comes in.  
`makeShared` is defined on the root object that is the common single point of entry, changed by outside events.
In this example, that would be `selectedPerson`.

```js
crsbinding.data.makeShared(this, "selectedPerson", ["firstName", "lastName"]);
```

When calling `makeShared` it sets up triggers on that object and it's callbacks.
When setting the `selectedPerson` from the list a link is created. 
The list item is updated when one of the properties defined in `makeShared`. 

## Marking the selected list item

When we click on a person in the list we want a marker in the list to show what the selected item is.  
For this we are going to use the aria-selected attribute.
When we click on a element we need to remove the previous aria selected attribute and set the new one as appropriate.
We will not use javascript for this but instead using a binding expression on the aria-selected attribute.

```html
<li aria-selected.if="$parent.selectedPerson.id == person.id"></li>
```

Consider the above expression.  
Simply put, the `aria-selected` is present if this person's id is the same as the selectedPerons's id.  
The if binding expression will remove the attribute if this expression does not pass and add it if it does.

One small thing to note. 
When using a for to render a collection the context changes to that item in the array.  
You also provide that context with a name, in this case "person".  

```html
<template for="person of people"></template>
```

The selectedPerson object is not found on the person but actually on the view model.  
`$parent` allows you to refer to that context instead of the current context (the person).