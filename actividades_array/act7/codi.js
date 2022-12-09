function ordenaMenor(caracteres) {
  // ordenamos los caracteres de forma inversa
  const caracteresOrdenados = caracteres.sort((a, b) => b - a);
  window.alert(caracteresOrdenados);
}
