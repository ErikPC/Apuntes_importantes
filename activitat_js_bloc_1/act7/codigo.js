var numero = prompt("numero");
var resultado = 1;
var mensaje = numero + "! = ";
for (let i = numero; i >= 1; i--) {
  if (i > 1) {
    mensaje = mensaje + i + " x ";
  } else {
    mensaje = mensaje + "1 = ";
  }
  resultado = resultado * i;
}
mensaje = mensaje + resultado;
this.alert(mensaje);
