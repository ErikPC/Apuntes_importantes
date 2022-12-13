/**
 * global vs local
 * var to declare local variables
 */

scope = "global";

function checkscope2() {
  scope = "local";
  myscope = "local";

  return [scope, myscope];
}

console.log(checkscope2());
// ves la lista porque es el return de la funcion
console.log(scope);
//el global solo se modifica dentro de la funcion , fuera no pasa nada
console.log(myscope); // => WTF ¿?
// como devuelve la lista es accesible la variable desde fuera
