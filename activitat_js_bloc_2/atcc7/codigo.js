// Inicializar precios y valores de las monedas
const precios = { A: 1.2, B: 2.7, C: 4.8 };
const monedas = { 10: 0.1, 50: 0.5, 1: 1 };

// Pedir al usuario que elija el producto
const producto = prompt("Elija el producto que desea comprar (A, B o C): ");

// Pedir al usuario que ingrese las monedas hasta alcanzar el monto a pagar
let pago = 0;
while (pago < precios[producto]) {
  const moneda = parseInt(prompt("Ingrese una moneda (10, 50 o 1): "));
  pago += monedas[moneda];
}

// Calcular el cambio
const cambio = pago - precios[producto];

// Mostrar las monedas de vuelto
if (cambio > 0) {
  console.log(`Su cambio es de ${cambio} €`);
  for (const moneda of Object.keys(monedas).sort((a, b) => b - a)) {
    const cantidad = Math.floor(cambio / monedas[moneda]);
    if (cantidad > 0) {
      console.log(`- ${cantidad} moneda(s) de ${moneda} cent`);
      cambio -= cantidad * monedas[moneda];
    }
  }
}
