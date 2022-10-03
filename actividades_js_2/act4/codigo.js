var valores = [true, 5, false, "hola", "adios", 2];

function isString(valor) {
  if (typeof valor == "string") {
    return true;
  } else {
    return false;
  }
}
function isBool(valor) {
  if (typeof valor == "boolean") {
    return true;
  } else {
    return false;
  }
}
function isInt(valor) {
  if (typeof valor == "integer") {
    return true;
  } else {
    return false;
  }
}
var masGrande = valores
  .filter((valor) => isString(valor))
  .sort((s1, s2) => s1.length > s2.length)[0];

var varTrue = valores.filter((valor) => isBool(valor));
varTrue = varTrue[0] || varTrue[1];
var varFalse = varTrue[0] && varTrue[1];

var operaciones = valores.filter((valor) => isInt(valor));

var resultado = 0;
var suma = operaciones.map((valor) => resultado + valor);
var resta = operaciones[0] - operaciones[1];
var multiplicacion = operaciones[0] * operaciones[1];
var division = operaciones[0] / operaciones[1];
var modulo = operaciones[0] % operaciones[1];
