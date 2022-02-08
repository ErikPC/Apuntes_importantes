function pedir_numeros() {
  let lista_numeros = [];
  let counter = 0;
  while (counter <= 9) {
    let numero = parseInt(prompt("Dime un numero"));
    lista_numeros[counter] = numero;
    counter++;
  }
  var ordenada = lista_numeros.sort((a, b) => {
    return a - b;
  });
  window.alert(ordenada);
}
