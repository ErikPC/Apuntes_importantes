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

// Primero se calcula la edad de cada ciclista
var today = new Date(); // Fecha actual
equipCiclista.ciclistas.forEach(function (ciclista) {
  var birthDate = new Date(ciclista.born); // Fecha de nacimiento del ciclista
  ciclista.age = today.getFullYear() - birthDate.getFullYear(); // Edad del ciclista
});

// Luego se ordenan los ciclistas según su edad
equipCiclista.ciclistas.sort(function (a, b) {
  return a.age - b.age; // Ordena de menor a mayor
});

// Finalmente se imprime el nombre de cada ciclista
equipCiclista.ciclistas.forEach(function (ciclista) {
  console.log(ciclista.nombre);
});
