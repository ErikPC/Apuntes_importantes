function validar(form) {
  let contraseña = form.contraseña.value;

  if (!regex.test(contraseña)) {
    window.alert("Contraseña invalida");
  }
}
