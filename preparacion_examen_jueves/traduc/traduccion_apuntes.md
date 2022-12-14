# Que es el Scope

Como el motor de JS procesa nuestro programa antes de que se ejecute. JS generalmente se clasifica como un lenguaje de secuencias de comandos interpretado,una pasada de arriba hacia abajo, JS es de hecho analizado/compilado en fase separada antes de que comience la ejecucion.

Funciones que mantienen y acceden a variables bajo su alcance original sin importar en que parte del programa se encuentre, y se ejecutan las funciones , se llaman closure.

## Compilado vs Interpretado

La compilacion de código es un conjunto de pasos que procesan el texto de su código y convertirlo en una lista de instrucciones que la computadora pueda entender.

La interpretación del codigo fuente es transformado línea por línea , cada línea o declaracion se ejecuta inmediatamente antes procediendo a procesar la siguiente línea

Los motores JS modernos en realidad emplean numerosas variaciones tanto de compilacion como de interpretación en el manejo de JS programas.

## Compiling Code

Programa procesado por un compilador en tres etapas básicas:

1 Tokenización/Lexing: dividir una cadena de carácteres en significativos fragmentos , llamados tokens. El tokenizador invocaría reglas de analisis con estado

2 Parsing: tokes y convertirlos en un arbol anidado elementos estructura gramatical del programa

3 Code generation

El motor JS es mucho más complejo que solo estas tres etapas. Los motores JS no tienen el lujo de tener mucho tiempo para realizar su trabajo y optimizaciones. Los motores JS utilizan todo tipo de trucos (como JIT, que compilan de forma perezosa e incluso recompilacion en caliente).

### Dos Fases

análisis/compilacion primero, luego la ejecución tres carácteristicas del programa, syntax errors, early errors, adn hoisting.

#### Syntax errors del inicio

```JS
greeting = ."Hi";
// SyntaxError: unexpected token .
```

JS fue ejecutado de arriba hacia abajo línea por línea, uno esperaría que se imprimiera el mensaje "hello" abtes de que se arroje el error de sintaxis. Eso no sucede.

#### Early errors

```JS
console.log("Howdy");
saySomething("Hello","Hi");
// Uncaught SyntaxError: Duplicate parameter name not
// allowed in this context
function saySomething(greeting,greeting) {
"use strict";
console.log(greeting);
}
```

el syntaxError aqui se lanza antes de que se ejecute el programa, strict-mode

#### Hoisting

```JS
function saySomething() {
var greeting = "Hello";
{
greeting = "Howdy"; // error comes from here
let greeting = "Hi";
console.log(greeting);
}
}
saySomething();
// ReferenceError: Cannot access 'greeting' before
// initialization
```

la siguiente declaracion declararía una variable de ámbito de bloque del mismo nombre (saludo) es si el motor JS ya había procesado este código en un paso anterior y ya había configurado todos los ámbitos y sus asociaciones de variables
