function creaString(palabras) {
  const string = palabras.map((s) => s[0]).join("");

  return string.toUpperCase();
}
test = ["alguns", "cans", "miren", "enfora"];
console.log(creaString(test));
