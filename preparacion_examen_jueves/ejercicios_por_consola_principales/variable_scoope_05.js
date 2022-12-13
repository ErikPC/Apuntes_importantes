/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {
  console.log(scope); // WTF !!
  // el compilador detecta el var de abajo y lo sobrepone al de arriba , asi que es como si lo "tapara"
  // por eso devuelve undefined
  var scope = "local";
  console.log(scope); // Prints "local"

  // print local porque es el valor que tiene dentro de la funcion
}

f();

console.log(scope); // Prints "global"
// porque la funcion no modifica realmente y sigue sin modificarse el scope
