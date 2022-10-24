var nombre = "Juan";

function nombres() {
  // Aunque sea un var se queda en el scoope de la funcion
  var nombre = "Pedro";
  console.log(nombre, "Dentro del if");
}

// como la variable se ha "modificado"  dentro de la funcion de nombre no se ha cambiado realmente

console.log(nombre, "Fuera del if");

nombres();

console.log(nombre, "no se guarda el nombre");

if (nombre) {
  // En cambio el if esta en el hambito global y se modifica el nombre
  var nombre = "Pedro";
  console.log(nombre, "Dentro del if");
}
console.log(nombre, "Pikopiko");
