const numeros = [1, 2, 3, 4, 5];
let numeroMayor = 0;

numeros.forEach((n) => {
  if (n > numeroMayor) {
    numeroMayor = n;
  }
});

console.log(numeroMayor);
