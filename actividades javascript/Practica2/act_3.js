function edad_usuario() {
  let edad = prompt("Escribe tu edad");
  let caib_web = "http://www.caib.es";
  if (edad >= 16) {
    document.write("<a href='http://www.caib.es'/a>http://www.caib.es</a>");
  } else {
    document.write(
      "<h1>Si no tienes los 16 no tienes acceso al portas de FP , NO NO NO</h1>"
    );
  }
}
