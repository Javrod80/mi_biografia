function muestraMensaje() {
  const checkbox = document.getElementById("acepto");

  if (!checkbox.checked) {
    alert("Por favor, acepta los términos para continuar.");
    return false;
  }

  alert("Gracias....ya te responderé...");
  limpiarFormulario();
}

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
