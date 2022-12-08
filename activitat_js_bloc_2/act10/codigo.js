function esPalindromo(v) {
  let vlowerCase = v.replace(/\s+/g, "").toLowerCase();
  let longitud = vlowerCase.length;
  for (let i = 0; i < longitud; i++) {
    if (!(vlovlowerCase[i] == vlowerCase[longitud - (i + 1)])) {
      window.alert("No es palíndromo");
    }
  }
  window.alert("Es palíndromo");
}
