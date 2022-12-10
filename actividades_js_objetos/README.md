Realizaremos las actividades a partir del siguiente objeto:

```js
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
```

1.  Imprime nombres: Imprime los nombres de los ciclistas, según el orden natural del
    array. Resultado:

2.  Imprime nombres ordenados alfabéticamente: Imprime los nombres de los ciclistas
    ordenados alfabéticamente. Resultado:

3.  Imprime nombres ordenados por altura y luego saca la lista de los nombres ordenada
    por altura, de los más altos a los más bajos. Resultado:

4.  Imprime nombres de ciclistas de mejor a peor: Ordena de peor a mejor, teniendo en
    cuenta que el mejor ciclista es el que tiene más tours, y si empatan a tours, es mejor el
    que tiene más wins. Imprime los nombres ordenados y también el número de tours y
    de wins.

5.  Utiliza map() para añadir un tour a todos los ciclistas.

6.  Utiliza filter() para eliminar todos los ciclistas menores de 30 años

7.  Utiliza find() para encontrar el primer ciclista que tiene más de 30 años.

8.  Añade un ciclista a la posición 2 con los siguientes datos:

```js
nom: "Josh Pantano",
born: "30/11/1995",
height: 1.88,
tours: 2,
wins: 9
```

9.  Imprime nombres ordenados por edad: de más jóvenes a más viejos.
