function meses_anio() {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  for (var i = 0; i < meses.length; i += 1) {
    document.write("<h3>" + meses[i] + "</h3>");
  }
}
