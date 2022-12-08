function getSignoZodiaco(fecha) {
  var dia = parseInt(fecha[0] + fecha[1]);
  var mes = parseInt(fecha[3] + fecha[4]);
  let aries = function (dia, mes) {
    if (mes == 4 && dia <= 20) {
      console.log("Aries");
    }
    if (mes == 3 && dia >= 21) {
      console.log("Aries");
    }
  };
  let libra = function (dia, mes) {
    if (mes == 10 && dia <= 23) {
      console.log("Libra");
    }
    if (mes == 9 && dia >= 24) {
      console.log("Libra");
    }
  };
  let tauro = function (dia, mes) {
    if (mes == 5 && dia <= 21) {
      console.log("Tauro");
    }
    if (mes == 4 && dia >= 21) {
      console.log("Tauro");
    }
  };
  let scorpio = function (dia, mes) {
    if (mes == 11 && dia <= 22) {
      console.log("Escorpio");
    }
    if (mes == 10 && dia >= 24) {
      console.log("Escorpio");
    }
  };
  let geminis = function (dia, mes) {
    if (mes == 6 && dia <= 21) {
      console.log("Geminis");
    }
    if (mes == 5 && dia >= 22) {
      console.log("Geminis");
    }
  };
  let sagitario = function (dia, mes) {
    if (mes == 12 && dia <= 21) {
      console.log("Sagitario");
    }
    if (mes == 11 && dia >= 23) {
      console.log("Sagitario");
    }
  };
  let cancer = function (dia, mes) {
    if (mes == 7 && dia <= 23) {
      console.log("Cancer");
    }
    if (mes == 6 && dia >= 21) {
      console.log("Cancer");
    }
  };
  let capricornio = function (dia, mes) {
    if (mes == 1 && dia <= 20) {
      console.log("Capricornio");
    }
    if (mes == 12 && dia >= 22) {
      console.log("Capricornio");
    }
  };
  let leo = function (dia, mes) {
    if (mes == 8 && dia <= 23) {
      console.log("Leo");
    }
    if (mes == 7 && dia >= 24) {
      console.log("Leo");
    }
  };
  let acuario = function (dia, mes) {
    if (mes == 2 && dia <= 19) {
      console.log("Acuario");
    }
    if (mes == 1 && dia >= 21) {
      console.log("Acuario");
    }
  };
  let virgo = function (dia, mes) {
    if (mes == 9 && dia <= 23) {
      console.log("Virgo");
    }
    if (mes == 8 && dia >= 24) {
      console.log("Virgo");
    }
  };
  let piscis = function (dia, mes) {
    if (mes == 3 && dia <= 20) {
      console.log("Piscis");
    }
    if (mes == 2 && dia >= 20) {
      console.log("Piscis");
    }
  };

  let lista = [
    aries(dia, mes),
    libra(dia, mes),
    tauro(dia, mes),
    scorpio(dia, mes),
    geminis(dia, mes),
    sagitario(dia, mes),
    cancer(dia, mes),
    capricornio(dia, mes),
    leo(dia.mes),
    acuario(dia, mes),
    virgo(dia, mes),
    piscis(dia, mes),
  ];
  lista.forEach((m) => (dia, mes));
}

getSignoZodiaco("23/04");

getSignoZodiaco("15/04");

getSignoZodiaco("31/10");
