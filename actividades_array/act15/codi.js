const numeros = [1, 2, 3, 4, 5];

// obtenemos la suma total de los elementos del array 'numeros'
const sumaTotal = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);

console.log(sumaTotal);
