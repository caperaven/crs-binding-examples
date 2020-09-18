# SVG 

## Intoduction 
This example shows a couple of svg binding examples.  
The first has to do with showing a svg in a list where you use a `<symbol>` and  `<use>` combo to show the svg.
The second animates a rectangle as values for position and size changes.

## Errors
You cannot use the standard attribute binding expression like `x="${position}"` as this will case a syntax error.  
Instead, we use the `.attr` binding syntax to achieve the same thing but prevent any syntax errors.

```
x.attr="${position}"
```