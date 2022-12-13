/**
 * global vs local
 */

var scope = "global";

function checkscope() {
  var scope = "local";
  return scope;
}

console.log(checkscope()); // => "local"

// devuelve local porque declara que devuelve esa variable
