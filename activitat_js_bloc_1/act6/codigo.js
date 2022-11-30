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

var dni = prompt("dame dni sin letra");

if (dni < 0 || dni > 99999999) {
  this.alert("No es valido");
} else {
  var resultado = dni % 23;
  this.alert(letras[resultado]);
}
