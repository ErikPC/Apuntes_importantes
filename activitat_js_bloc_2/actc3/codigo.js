function getSignoZodiaco(dia, mes) {
  if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) console.log("Aries");
  if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) console.log("Libra");
  if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) console.log("Tauro");
  if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11))
    console.log("Escorpio");
  if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6))
    console.log("G\u00E9minis");
  if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12))
    console.log("Sagitario");
  if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7))
    console.log("C\u00E1ncer");
  if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1))
    console.log("Capricornio");
  if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) console.log("Leo");
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2))
    console.log("Acuario");
  if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) console.log("Virgo");
  if ((dia >= 20 && mes == 2) || (dia <= 20 && mes == 3)) console.log("Piscis");
}
