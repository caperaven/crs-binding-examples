# Tabsheet

## Introduction

This example shows how you can implement a simple tabsheet using crs binding.  
This is not meant to be the most performant, load on demand ultra cool tabsheet.  
Instead, it's very quick to implement and easy to use.

## Component logic

You need two parts.

1. Button to set the selected tab
1. The panel that contains the tab details.

### Tab button

```html
<button click.setValue="tab = 'tab1'" classlist.if="tab == 'tab1' ? 'selected'">Tab 1</button>
```

There are two logic parts presented on this button.

1. When you click this button set the tab property to the tab we want to show. In this case 'tab1'.
1. If the tab property is equal to this button's tab, add the class 'selected' to the classlist.

### Tab

```html
<div hidden.if="tab != 'tab1'">
    <h3>Tab 1</h3>
</div>
```

This is actually rather simple.  
This div is hidden if the tab property is not equal to the required value.  
In this case the div requires the tab value to be 'tab1';

That is it, simple right :)
See the source links for a complete picture.