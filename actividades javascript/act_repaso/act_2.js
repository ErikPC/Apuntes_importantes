function notaMedia(form) {
  let primera = parseFloat(form.primera.value);

  let segunda = parseFloat(form.segunda.value);

  let media = (primera + segunda) / 2;

  let respuesta = "Nota media --> " + media;

  let p = document.createElement("p");
  p.appendChild(document.createTextNode(respuesta));
  let main = document.getElementsByTagName("main");
  main[0].appendChild(p);
}
