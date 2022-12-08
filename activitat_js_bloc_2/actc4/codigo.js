// Iteramos sobre los valores del 1 al 10
for (let i = 1; i <= 10; i++) {
  // Mostramos la tabla de multiplicar del valor actual
  console.log([...Array(10).keys()].map((j) => i * (j + 1)).join(" "));
}
