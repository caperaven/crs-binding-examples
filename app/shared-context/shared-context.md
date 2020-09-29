# Shared Context

## Introduction

Complex components often consist out of multiple smaller components.  
Each bindable element has it's own binding context and this can make complex components problematic as you need to duplicate data between the different components.

Sharing the same context makes this much easier.  

## Steps

1. Indicate that the components don't have it's own context.
1. Pass the context Id from the parent to the children.
1. Assign the data id property in the children.

## Parts on this example

1. view model - shared-context - context
1. component-one - bindable element with no context
1. component-two - bindable element with no context

## Dealing with timing

The context needs to load it's components at the very last possible moment.

```js
async connectedCallback() {
    await super.connectedCallback();

    // at this point the context id has been assigned
    await import("./component-one.js");
    await import("./component-two.js");
}
```

We will use the binding engine to pass the binding context on using an attribute binding.

```html
<component-one data-uid.attr="contextId"></component-one>
<component-two data-uid.attr="contextId"></component-two>
```

On the connected callback of the components we get the context id and set the internal data id field.

```js
async connectedCallback() {
    this._dataId = Number(this.dataset.uid);
    await super.connectedCallback();
}
```