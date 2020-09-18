# Dynamic UI using the crs-widget

## Introduction

<a href="https://github.com/caperaven/crs-binding/blob/develop/src/view/crs-widget.js" target="_blank">crs-widget</a> is a lightweight binding custom element.  
It does not have it's own binding context or html.  
It does not have an initial lifecycle event.  
It basically just sits there and wait's for someone to send content it's way.

## Sending content to widget

The widget uses the <a href="https://github.com/caperaven/crs-binding-documentation/blob/master/7.event-aggregation.md" target="_blank">post message</a> feature of crs-binding.  
You need to pass two things to the widget.

1. the context or context id
1. html to render - can also contain binding expressions to evaluate against the context you passed on.

```js
crsbinding.events.emitter.postMessage("#preview", {
    context: this,
    html: htmlStr
})
```

## Usage

This component can sit anywhere on your application.
It is independent, and you can send it any context and html at any time to render.  
This makes the component very flexible and can be used to render context aware features in your application if and when you need too.

## Widget vs Context sharing bindable element

There are two ways to show context sharing UI

1. context sharing <a href="https://github.com/caperaven/crs-binding-documentation/blob/master/2.%20bindable-element.md" target="_blank">bindable element</a>
1. widget

The difference between the two is that the element has static html and the widget dynamic html.  
The bindable element is a more heavy weight component and includes features such as dome events.  
The widget is a light weight binding enabled html renderer.