function validar(form) {
  let contraseña = form.contraseña.value;

  if (!/.{4,8}[0-9]{2}/.test(contraseña)) {
    window.alert("Contraseña invalida");
  }

  if (!/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/) {
    window.alert("Mail invalido");
  }
}
