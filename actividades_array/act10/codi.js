function creaString(palabras) {
  const string = palabras.join("-");
  return string;
}
const palabras = ["hola", "como", "estas"];
const string = creaString(palabras);
console.log(string);
