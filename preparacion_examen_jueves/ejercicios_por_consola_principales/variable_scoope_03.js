/**
 * global vs local
 * nested scopes
 */

var scope = "global scope";

function checkscope() {
  var scope = "local scope";

  function nested() {
    var scope = "nested scope";
    return scope;
  }

  return nested();
}

console.log(checkscope()); // => "nested scope"
// aunque llame a checkscope() lo que devuelve es la llamada a la funcion nested()
// que devuelve el scope nested scope
console.log(scope); // => "global scope"
// se modifica en la funcion  , no fuera
