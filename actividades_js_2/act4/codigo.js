var valores = [true, 5, false, "hola", "adios", 2];

function isString(valor) {
  if (typeof valor == "string") {
    return true;
  } else {
    return false;
  }
}
var masGrande = valores
  .filter((valor) => isString(valor))
  .sort((s1, s2) => s1.length > s2.length)[0];
