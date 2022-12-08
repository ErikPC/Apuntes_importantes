var notas = [];

function getMedia(nota) {
  if (nota < 5) {
    console.log("Insuficiente");
  }
  if (nota == 5) {
    console.log("suficiente");
  }
  if (nota == 6) {
    console.log("Bien");
  }
  if (nota == 7 && nota == 8) {
    console.log("Notable");
  }
  if (nota == 9 && nota == 10) {
    console.log("Sobresaliente");
  }
  notas.push(nota);
  if ((notas.length = 5)) {
    let total = notas.reduce((a, b) => Number(a) + Number(b), 0);
    let media = total / 5;
    if (media < 5) {
      console.log("Insuficiente" + media);
    }
    if (media == 5) {
      console.log("suficiente" + media);
    }
    if (media == 6) {
      console.log("Bien" + media);
    }
    if (media == 7 && media == 8) {
      console.log("Notable" + media);
    }
    if (media == 9 && media == 10) {
      console.log("Sobresaliente" + media);
    }
  } else {
    console.log("no se puede hacer media");
  }
}
