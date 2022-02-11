function stringOnumber() {
  let palabra = prompt("Escribe una palabra");
  let letra = palabra.charAt(0);
  if (isNaN(parseInt(letra))) {
    window.alert("No es un numero");
  } else {
    window.alert("Es un numero");
  }
}
