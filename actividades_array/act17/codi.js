const numeros = [1, 2, 3, 4, 5, 6];

// obtenemos el primer y el último elemento del array 'numeros'
const primero = numeros.shift();
const ultimo = numeros.pop();

// insertamos el primer y el último elemento en el centro del array 'numeros'
numeros.splice(Math.floor(numeros.length / 2), 0, primero, ultimo);

console.log(numeros);
