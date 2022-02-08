function numero_par() {
  let condicion = true;
  while (condicion) {
    let numero = parseInt(prompt("Dime un numero"));
    if (numero % 2) {
      condicion = window.confirm("El numero es impar");
    } else {
      condicion = window.confirm("El numero es par");
    }
  }
}
