function modificar_cadena() {
  let cadena = prompt(
    "Dime que el string que quieres visualizar de distintas maneras");
  window.alert(cadena.toLowerCase());
  window.alert(cadena.toUpperCase());
  window.alert(cadena.substring(0, cadena.length -5));
  let cadena_array = cadena.split(' ');
  for (var i = 0; i < cadena_array.length ; i++) {
    window.alert(cadena_array[i])
  }
}