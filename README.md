# mdl-materialsnackbar-typescript

TypeScript type definition for MDL snackbar element

MDL website: https://getmdl.io/components/index.html#snackbar-section

MDL source: https://github.com/google/material-design-lite/blob/mdl-1.x/src/snackbar/snackbar.js

## Installation

    typings install github:qsctr/mdl-materialsnackbar-typescript#[latest commit] --global --save

## Usage

tsconfig.json

    {
        "files": [
            "typings/index.d.ts"
        ]
    }
    
or

    /// <reference path="path/to/typings/index.d.ts" />
    
then

    let snackbar = document.querySelector('.mdl-snackbar') as MDLSnackbarElement;

    snackbar.MaterialSnackbar.showSnackbar({
        message: 'hi',
        actionText: 'ok',
        actionHandler: () => console.log('clicked')
    });
    
    // etc

## Note

Short version:

There is a case where passing incorrect arguments won't get caught by the
compiler, but a runtime error will be thrown by MDL anyways, so everything is
all right.

Long version:

In MDL the `actionText` property is required if `actionHandler` is set,
otherwise it is optional. I could not find a way to make this fully type-safe
using TypeScript. Right now everything works correctly if you are passing an
object literal directly into the function, but if you are first assigning the
data object to a variable, then passing it in, the compiler does allow you to
only specify `actionHandler` and not `actionText`. This is due to the
`actionHandler` being recognized as an excess property in the object, and since
TypeScript is structurally typed, that is allowed. The reason it works with
object literals is TypeScript does excess property checks on object literals.
However, even if you pass `actionHandler` and not `actionText`, MDL will still
throw a runtime error. Still, if you are reading this and you know a way to
make the type definition fully compliant please submit a pull request.