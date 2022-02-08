function pedir_numeros() {
  let lista_numeros = [];
  let counter = 0;
  while (counter <= 9) {
    let numero = prompt("Dime un numero");
    lista_numeros[counter] = numero;
    counter++;
  }
  window.alert(lista_numeros);
}
