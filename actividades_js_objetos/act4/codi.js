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

equipCiclista.ciclistas.sort((a, b) => {
  if (a.tours === b.tours) {
    // Si dos ciclistas tienen el mismo número de tours,
    // se ordenan según el número de wins
    return b.wins - a.wins;
  } else {
    // Si dos ciclistas no tienen el mismo número de tours,
    // se ordenan según el número de tours
    return b.tours - a.tours;
  }
});

for (let i = 0; i < equipCiclista.ciclistas.length; i++) {
  console.log(equipCiclista.ciclistas.nombre);
}
