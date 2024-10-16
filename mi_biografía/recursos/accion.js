


// crear funcionalidad del boton submit del fomulario


const botonenviar = document.getElementById("enviar");

botonenviar.addEventListener("click", function(){
    createHTML("Welcome to the Show");
    console.log("hola");
});


function createHTML(texto){
   
    let etiqueta = document.createElement('p');
    let contenido = document.createTextNode(texto);

    etiqueta.appendChild(contenido);
    document.body.appendChild(etiqueta);
     
};

