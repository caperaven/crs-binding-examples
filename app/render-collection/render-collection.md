# Render Collection

## Introduction

This is a simple example showing how to use <a href="https://github.com/caperaven/crs-binding-documentation/blob/master/5.%20static-ui.md#render-collection" target="_blank">crsbinding.utils.renderCollection</a>  
This is part of static rendering features and more documentation can be found on <a href="https://github.com/caperaven/crs-binding-documentation/blob/master/5.%20static-ui.md" target="_blank">crs-binding documentation</a>

## Aim

The aim of this function is to solve timing issues with static renders where you can't have the data at the preLoad stage.  
Update and render the static UI at any time you want.  
Unlike the `for.once` expression, you can update your static renders when you want to.

Use `for.once` when you have control over the data and can have it in time.  
This is a no javascript way to render your static data once and then forget about it.

Use `renderCollection` when you can't have the data in time, or you want to update the collection later, but it does not happen that often or perhaps at all.

If you have dynamic data use the standard `for` expression.  

## Important parts

1. Declare the template you want to use
1. Fetch the data you want to render out
1. Use `crsbinding.utils.renderCollection` to create the document fragment with child elements.
1. The function `renderToTarget` on the view model has additional parameters to define cleanup and target parent.

## Inflation

Under the hood this uses the inflation manager.  
It just provides you with a short hand function to make working with the inflation manager quick and simple.

## Reuse elements

When using `renderCollection` with svg paths, you don't want to remove the path and replace it with a new one.  
If you have a transition on the path css and you change the path's data it will animate to the next shape.  
For this you can pass in a third parameter of the elements you want to reuse.  
Those elements will have their values changes without removing them from the dom.  
See the <a target="_blank" href="https://github.com/caperaven/crs-binding-documentation/blob/master/5.%20static-ui.md#render-collection">renderCollection documentation</a> for more details.