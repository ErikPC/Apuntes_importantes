var horas = 0;
var min = 0;
var i = true;
while (i > 0) {
  i = prompt("tiempo tramo en min");
  if (i > 60) {
    horas = horas + i / 60;
    min = i % 60;
  } else {
    min = min + i;
  }
  console.log(
    "El viaje a durado " +
      toString(horas) +
      " horas y " +
      toString(min) +
      " minutos."
  );
}
