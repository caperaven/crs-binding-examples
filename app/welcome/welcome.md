# Welcome

## Introduction

The welcome screen represents a pretty basic view model where the content is mostly static.
It does have one interesting piece of code that you will see throughout this project on all view models.

```js
get sourceUrl() {
    return import.meta.url.replace(".js", ".source.js");
}
```

The above code is responsible for the base class to know where to find the source path data used in the source component at the topright.