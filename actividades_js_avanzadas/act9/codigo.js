function comprobarString() {
  let cadena = window.prompt("Inserta una cadena de texto:")
  if (cadena.match(/^[^a-z\W\d\s]+$/)) {
    this.alert("Cadena en mayusculas");
  } else if (cadena.match(/^[^A-Z\W\d\s]+$/)) {
    this.alert("Cadena en minusculas");
  } else {
    this.alert("Cadena mixta");
  }
}
