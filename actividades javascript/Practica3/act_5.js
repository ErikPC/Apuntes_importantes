function validacion(form) {
  let nombre = form.nombre.value;
  let mail = form.mail.value;
  let tarjeta = form.tarjeta.value;

  if (!/^[A-Z]/.test(nombre)) {
    window.alert("El nombre no empieza por mayuscula");
  }

  if (!/[\w]+@[\w]+\.[a-z]{2,4}$/.test(mail)) {
    window.alert("El mail es incorrecto");
  }

  if (!/^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/.test(tarjeta)) {
    window.alert("La tarjeta es invalida");
  }
}
