/**
 * global vs local
 * function scope and hoisting
 */

var scope = "global";

function f() {
  var scope;
  // no se inicialida la variable , simplemente se dice como que esta
  console.log(scope);
  scope = "local";
  console.log(scope);
  // enseña el valor de scope dentro del if una vez se le ha dado el valor
}

f();

console.log(scope);
// scope fuera del if
