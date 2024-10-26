function muestraMensaje() {
  let checkbox = document.getElementById("acepto");
  let name = document.getElementById("nombre");
  let lastName = document.getElementById("apellido");
  let mail = document.getElementById("email");

  if (!name.value || !lastName.value || !mail.value) {
    alert("Por favor, rellene todos los campos");
    return false;
  }

  if (!checkbox.checked) {
    alert("Por favor, acepta los términos para continuar.");
    return false;
  }
  alert("Hasta la vista Baby!!");
  limpiarFormulario();
}

// Aqui estoy probando un parte de un código que encontré en los apuntes y me pareció interesante.
window.onload = function () {
  document.getElementById("enviar").onclick = muestraMensaje;

  let inputs = document.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].type == "text" || inputs[i].type == "email") {
      inputs[i].onfocus = resaltar;
      inputs[i].onblur = noresaltar;
    }
  }
};

function resaltar() {
  this.style.backgroundColor = "lightblue";
  this.style.color = "darkblue";
}

function noresaltar() {
  this.style.backgroundColor = "lightgray";
  this.style.color = "black";
}

function limpiarFormulario() {
  document.getElementById("miFormulario").reset();
}
