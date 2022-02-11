function actividad() {
  let main = document.getElementById("main");
  let h2 = document.getElementById("h2");
  main.appendChild(h2);
  let nombrePagina = "Erik Pardillo";
  let p = document.createElement("p");
  p.innerHTML = nombrePagina;
  main.appendChild(p);
}
