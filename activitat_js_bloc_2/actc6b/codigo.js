// Pedimos al usuario que ingrese el número pensado
let numeroPensado = parseInt(
  prompt("Ingrese el número que está pensando (entre 0 y 100): ")
);

// Verificamos que el número pensado sea válido
if (isNaN(numeroPensado) || numeroPensado < 0 || numeroPensado > 100) {
  alert("Por favor, ingrese un número válido (entre 0 y 100).");
}

// Inicializamos el intervalo donde buscaremos el número
let minimo = 0;
let maximo = 100;

// Inicializamos la cantidad de intentos realizados
let intentos = 0;

// Mientras no hayamos adivinado el número, seguimos buscando
while (minimo <= maximo) {
  // Calculamos el punto medio del intervalo
  let puntoMedio = Math.floor((minimo + maximo) / 2);

  // Incrementamos la cantidad de intentos realizados
  intentos++;

  // Mostramos al usuario el número que el ordenador ha adivinado
  alert(`El ordenador ha adivinado: ${puntoMedio}`);
}
