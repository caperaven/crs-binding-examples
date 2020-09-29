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
1. component-two - custom element with no context

## Prevent own context being created

Since we want to share the context we don't want out components to register it's own.  
This is only required if you use bindable element since that one of the construction tasks of bindable element.

To prevent the context from being created you need to override the `hasOwnContext` property and return false.

```js
get hasOwnContext() {
    return false;
}
```

As mentioned before, if you are using a standard HTMLElement you don't need to do this.  
See the component source files for more details.

## Pass on context id from parent to children

For this we are going to set the attribute `data-uid` to the contextId.

```html
<component-one data-uid.attr="contextId"></component-one>
<component-two data-uid.attr="contextId"></component-two>
```

Both components observe this attribute for change and when it does change performs it's initialization process.  
In both cases we need to set the `this._dataId` field to context id passed on.

```js
this._dataId = Number(this.dataset.uid);
```

See the main differences by looking at the function `attributeChangedCallback` in the component's source files.