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

const ciclistasOrdenados = equipCiclista.ciclistas.sort((a, b) => {
  if (a.nombre < b.nombre) {
    return -1;
  }
  if (a.nombre > b.nombre) {
    return 1;
  }
  return 0;
});

equipCiclista.ciclistas.map((c) => (c.tours = c.tours + 1));

equipCiclista.ciclistas.forEach((ciclista) => {
  console.log(ciclista.nombre);
  console.log(ciclista.tours);
});
