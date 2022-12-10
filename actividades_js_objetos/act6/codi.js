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

function isOlderThan30(ciclista) {
  // Obtener la fecha de nacimiento del ciclista
  const birthDate = new Date(ciclista.born);
  // Obtener la fecha actual
  const currentDate = new Date();
  // Calcular la edad del ciclista en años
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  // Devolver true si el ciclista tiene 30 años o más, false en caso contrario
  return age >= 30;
}

function isOlderThan30(ciclista) {
  // Obtener la fecha de nacimiento del ciclista
  const birthDate = new Date(ciclista.born);
  // Obtener la fecha actual
  const currentDate = new Date();
  // Calcular la edad del ciclista en años
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  // Devolver true si el ciclista tiene 30 años o más, false en caso contrario
  return age >= 30;
}
const ciclistasMayoresDe30 = equipCiclista.ciclistas.filter(isOlderThan30);
