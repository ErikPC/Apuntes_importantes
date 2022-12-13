/**
 * Variables declaradas por let tienen por alcance el bloque
 * en el que se han definido, así mismo, como en cualquier bloque interno.
 * De esta manera, let trabaja muy parecido a var.
 * La más notable diferencia es que el alcance de una variable var es la función contenedora.
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/let
 */

function varTest() {
  var x = 31;

  if (true) {
    var x = 71;
    console.log(x); // 71
  }

  console.log(x); // 71
}
// Explicacion , mía , crear un var x fuera del if y luego crear otro var x dentro sobreescribes el var x
// ya que son var con el mismo nombre y estan en un scope de funcion.

function letTest() {
  var x = 31;

  if (true) {
    let x = 71;
    console.log(x); // 71
  }

  console.log(x); // 31
}
// el let es una variable que fuera de su scoope no existe asi que no tira fuera
function hoistingTest() {
  console.log(w);
  //lo que pasa esque el compilador mira las var y guarda su espacio en memoria ,
  // pero en el momento en el  que se hace este console.log aun no esta definida

  // console.log(z);               // ReferenceError
  //reference error porque la z es un let que esta dentro del if

  var x = 31;
  let y = 91;
  u = 1;

  if (true) {
    let x = 71;
    console.log(x); // 71
    //el let crea otra variable llamada igual que la x pero sin sobreescribirla
    console.log(y); // 91
    // el let es accesible desde este scoope
    let z = 101;
    var w = 1001;
  }

  console.log(x); // 31
  //es 31 porque no lo sobreescribe el let

  // console.log(z);             // ReferenceError
  // lo mismo que el comentario del z de antes
  console.log(w); // 1001
  // al crear un var es accesible desde fuera
}

// varTest();

// letTest();

// hoistingTest();

console.log(u);

// si no lanzas la funcion no se crea y es como un var
