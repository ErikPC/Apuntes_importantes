var equipCiclista = {
  team: "alfa-lum1964",
  ciclistas: [
    {
      nombre: "Juan Alonso",
      born: "8/01/1958",
      height: 1.92,
      tours: 0,
      wins: 12,
    },
    {
      nombre: "Josh Pantano",
      born: "25/10/2000",
      height: 1.84,
      tours: 3,
      wins: 12,
    },
    {
      nombre: "Juan Alonso",
      born: "12/07/1993",
      height: 1.88,
      tours: 3,
      wins: 13,
    },
    {
      nombre: "Zolz Brucker",
      born: "08/09/1984",
      height: 1.72,
      tours: 0,
      wins: 1,
    },
    {
      nombre: "Otto Verdes",
      born: "19/02/1979",
      height: 1.92,
      tours: 0,
      wins: 12,
    },
    {
      nombre: "Bert Poel",
      born: "03/06/1995",
      height: 1.99,
      tours: 1,
      wins: 2,
    },
  ],
};

var ciclistaMayor30 = equipCiclista.ciclistas.find(function (ciclista) {
  // Obtener la fecha de nacimiento del ciclista
  var fechaNacimiento = new Date(ciclista.born);
  // Obtener la fecha actual
  var fechaActual = new Date();
  // Calcular la diferencia en años entre la fecha actual y la fecha de nacimiento
  var diferencia = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  // Si el ciclista ya cumplió años en este año, restar 1 a la diferencia
  if (
    fechaActual.getMonth() < fechaNacimiento.getMonth() ||
    (fechaActual.getMonth() === fechaNacimiento.getMonth() &&
      fechaActual.getDate() < fechaNacimiento.getDate())
  ) {
    diferencia--;
  }
  // Retornar true si la edad del ciclista es mayor a 30
  return diferencia > 30;
});

console.log(ciclistaMayor30);
