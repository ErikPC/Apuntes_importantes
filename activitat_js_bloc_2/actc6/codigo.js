// Generamos un número aleatorio entre 0 y 100
let numeroPensado = Math.floor(Math.random() * 101);

// Pedimos al usuario que adivine el número
let intento = parseInt(
  prompt("Adivine el número que estoy pensando (entre 0 y 100): ")
);

// Mientras el intento no sea igual al número pensado, seguimos pidiendo intentos
while (intento != numeroPensado) {
  // Si el intento es menor al número pensado, mostramos una pista
  if (intento < numeroPensado) {
    alert("El número que estoy pensando es mayor.");
  }
  // Si el intento es mayor al número pensado, mostramos una pista
  else {
    alert("El número que estoy pensando es menor.");
  }

  // Pedimos otro intento
  intento = parseInt(
    prompt("Adivine el número que estoy pensando (entre 0 y 100): ")
  );
}

// Si el intento es igual al número pensado, mostramos un mensaje de felicitación
alert("¡Felicidades, ha adivinado el número que estaba pensando!");
