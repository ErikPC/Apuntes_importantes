function hacerInvisible() {
  document
    .getElementById("katakuri")
    .setAttribute("style", "visibility: hidden");
}

function hacerVisible() {
  document.getElementById("katakuri").setAttribute("style", "");
}

function agrandar() {
  let img = document.getElementById("katakuri");
  let tamaño = parseInt(img.getAttribute("width"));
  tamaño = tamaño + 50;
  document.getElementById("katakuri").setAttribute("width", tamaño);
}

function minimizar() {
  let img = document.getElementById("katakuri");
  let tamaño = parseInt(img.getAttribute("width"));
  tamaño = tamaño - 50;
  document.getElementById("katakuri").setAttribute("width", tamaño);
}
