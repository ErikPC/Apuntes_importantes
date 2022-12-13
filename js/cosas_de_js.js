function b() {
  console.log(myVar);
}
function a() {
  // Variable que se quedea solo en el lexical scope
  var myVar = 2;
  b();
}

var myVar = 1;
a();
// Devuelve uno ya que la declara una variable en a() y no la modifica
