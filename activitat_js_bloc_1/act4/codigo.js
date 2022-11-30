var valores = [true, 5, false, "hola", "adios", 2];
var max = 0;
var maxString;

valores.forEach(function (val) {
  if (typeof val == "string" && val.length > max) {
    max = val.length;
    maxString = val;
  }
});

valores.forEach(function (val){
  if (typeof val == "boolean"){

  }
}
);

window.alert(maxString);
