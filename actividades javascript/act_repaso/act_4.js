function cambiop() {
  let h4 = document.getElementsByTagName("h4");
  for (i = 0; i < h4.length; i++) {
    h4[i].setAttribute("class", "resaltar");
  }
  let p = document.getElementsByTagName("p");
  for (i = 0; i < p.length; i++) {
    p[i].removeAttribute("class");
  }
}
