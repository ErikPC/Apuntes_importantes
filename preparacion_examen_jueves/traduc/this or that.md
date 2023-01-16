# Why this?

```JS
function identify() {
    return this.name.toUpperCase();
}
function speak() {
    var greeting = "Hello, I'm " + indetify.call(this)
    console.log( greeting );
}
var me = {
    name: "Kyle"
};
var you = {
    name: "Reader"
};

indetify.call(me)// KYLE
```

Permite reutilizar las funciones de `identify()` y `speak()` contra contexto multiple(me and you)

## Itself

La primera tentación común es asumir que esto se refiere a la función misma. `this` de echo no apunta en absoluto a ese objeto en función, por lo que aunque los nombres de propiedad son iguales, los objetos raíz son diferentes
