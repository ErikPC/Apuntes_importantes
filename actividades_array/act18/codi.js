const numeros = [1, 2, 3, 4, 5, 6];

// eliminamos los tres primeros elementos del array 'numeros'
const primerosTres = numeros.splice(0, 3);

// insertamos los tres primeros elementos al final del array 'numeros' en orden inverso
numeros.splice(
  numeros.length,
  0,
  primerosTres[2],
  primerosTres[1],
  primerosTres[0]
);

console.log(numeros);
