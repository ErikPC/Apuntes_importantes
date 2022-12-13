/**
 * global vs local
 * function scope and hoisting
 */

function test(o) {
  var i = 0;

  if (typeof o == "object") {
    var j = 0;

    for (var k = 0; k < 10; k++) {
      console.log(k); // print numbers 0 through 9
      // lo imprime porque esta dentro del for y encima es un var asi que sera accesible desde
      // fuera del scope del for
    }

    console.log(k); // prints 10
    // al ser var es accesible desde fuera y printe 10 que es el ultimo valor
  }

  console.log(j); // j is defined, but may not be initialized
  // no se ha modificado asi que devuelve 0
}

o = {};
test(o);
// o esta definida encima de test() asi que cuando la llama es un objeto vacío
