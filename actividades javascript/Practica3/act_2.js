function demanarAE() {
  let lletra = prompt("Introdueix una una vocal (només A o E): ");
  if (lletra.toLowerCase() == "a") {
    alert("Perfecte, has triat la A");
  } else if (lletra.toLowerCase() == "e") {
    alert("Perfecte has triat la E");
  } else {
    throw "No es ni A ni E";
  }
}
