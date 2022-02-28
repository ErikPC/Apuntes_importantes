function comprovar() {
  var num = document.getElementById("x").value;
  try {
    // en este try se intentan hacer los siguientes if en el caso de
    // que alguno no se cumpla lanza mensaje de error
    if (num == "") {
      // si esta vacio lanza este error por consola
      throw "No s'ha introduït cap número";
    }
    if (isNaN(num)) {
      // comprueba que el numero sea un numero y si no lo es manda
      // el siguiente mensaje por consola
      throw "La dada introduïda no és un número";
    }
    num = Number(num);
    if (num > 10) {
      // si el numero es mayor que 10 lanza el siguiente mensaje por consola
      throw "el número introduït és massa gran";
    }
    if (num < 5) {
      // si el numero es menor que 5 lanza el siguiente error por consola
      throw "el número introduït és massa petit";
    }
  } catch (err) {
    // en el caso de que haya algun error lanza un alert con el error
    alert("Error: " + err + ".");
  } finally {
    // pase lo que pase convierte el elemento con id "x" en un valor vacio
    document.getElementById("x").value = " ";
  }
}
