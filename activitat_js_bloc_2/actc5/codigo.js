// Inicializamos la variable que almacenará la duración total del viaje en minutos
let duracionTotal = 0;

// Pedimos la duración del primer tramo del viaje
let duracionTramo = parseInt(
  prompt("Ingrese la duración del primer tramo en minutos: ")
);

// Mientras la duración del tramo sea mayor a cero (es decir, no se haya ingresado un cero), seguimos pidiendo tramos
while (duracionTramo > 0) {
  // Agregamos la duración del tramo a la duración total del viaje
  duracionTotal += duracionTramo;

  // Pedimos la duración del siguiente tramo
  duracionTramo = parseInt(
    prompt("Ingrese la duración del siguiente tramo en minutos: ")
  );
}

// Una vez que se ha ingresado un cero, calculamos el tiempo total en horas y minutos
let horas = Math.floor(duracionTotal / 60);
let minutos = duracionTotal % 60;

// Mostramos el resultado al usuario
alert(`El tiempo total del viaje fue de ${horas} horas y ${minutos} minutos.`);
