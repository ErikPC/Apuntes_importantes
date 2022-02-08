function crearPag(form) {
  let nombre = form.nombre.value;
  let edad = form.edad.value;
  let deporte = form.deporte.value;
  let fecha = form.fecha.value;

  let div = document.getElementById("lista");
  let h2s = [...div.getElementsByTagName("h2")];
  let h2Deporte = h2s.filter(
    (h) => h.innerHTML.toLowerCase() == deporte.toLowerCase()
  );
  if (h2Deporte.length == 0) {
    let h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(deporte));
    let ul = document.createElement("ul");
    ul.setAttribute("id", deporte);
    div.appendChild(h2);
    div.appendChild(ul);
  }
  let ul = document.getElementById(deporte);
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`${nombre}, ${edad}, ${fecha}`));
  ul.appendChild(li);
}
