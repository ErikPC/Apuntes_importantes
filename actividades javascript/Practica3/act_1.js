function act_1() {
  var a = 4;
  try {
    t = a + b;
    alert(t);
  } catch (ReferenceError) {
    window.alert("jijiji error");
  }
}
