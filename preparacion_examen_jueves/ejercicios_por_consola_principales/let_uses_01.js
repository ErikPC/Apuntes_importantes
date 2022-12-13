/**
 * Ejemplos de uso de Let:
 * - Reemplazar var en bucles for
 * - Definicion de variables en un bloque:
 *   block vs lexical scope
 *
 *  Javascript, the Definitive Guide. David Flanagan.
 */

function oddsums(n) {
  let total = 0,
    result = []; // Defined throughout the function

  for (let x = 1; x <= n; x++) {
    // solo estara disponible en el for
    let odd = 2 * x - 1; // solo disponible en el for
    total += odd;
    result.push(total);
  }

  // console.log(x);                  // que sucede y por que?
  // error de que no esta definida porque no existe x fuera del for
  // console.log(odd);                // que sucede y por que?
  // lo mismo que x ya que son let
  console.log(total); // que sucede y por que?
  // devuelve el 25 ya que a pesar de que x y odd no son del mismo scoope la han modificado

  return result; // Using x or odd here would cause a ReferenceError
}

console.log(oddsums(5)); // Returns [1,4,9,16,25]
// devuelve result la funcion asi que si hace el console.log la veras
