var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

var dni = prompt("Escriba el DNI sin letra");
var letra_dni = prompt("Escriba la letra del DNI");

if (dni < 0 || dni > 99999999) {
  alert("No es valido");
} else {
  var result = dni % 23;
  var letra_calculada = letras[result];
}

if (letra_calculada == letra_dni) {
  alert("La letra esta bien");
} else {
  alert("La letra no esta bien");
}
