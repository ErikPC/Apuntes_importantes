function validar(form) {
  let contraseña = form.contraseña.value;

  if (!/.{4,8}[0-9]{2}/.test(contraseña)) {
    window.alert("Contraseña invalida");
  }

  if (!/[\w]+@[\w]+\.[a-z]{2,4}$/) {
    window.alert("Mail invalido");
  }
}
