// Pedir al usuario que ingrese n y la cantidad de productos
const n = parseInt(prompt("Ingrese el valor de n: "));
const cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));

// Pedir al usuario que ingrese el precio de cada producto
const precios = [];
for (let i = 0; i < cantidad; i++) {
  precios.push(parseInt(prompt(`Ingrese el precio del producto ${i + 1}: `)));
}

// Calcular el descuento total
let descuento = 0;
let porcentaje = 0.2;
for (let i = 0; i < cantidad; i++) {
  if (i % n === 0) {
    porcentaje /= 2;
  }
  descuento += Math.floor(precios[i] * porcentaje);
}

// Mostrar el precio total, el descuento total y el precio final
const precioTotal = precios.reduce((a, b) => a + b, 0);
const precioFinal = precioTotal - descuento;
console.log(`Precio total: ${precioTotal} €`);
console.log(`Descuento total: ${descuento} €`);
console.log(`Precio final: ${precioFinal} €`);
