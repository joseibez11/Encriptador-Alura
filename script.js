//logica encriptacion - desencriptación

var texto = document.querySelector(".area");
var vocales = ["e", "i", "a", "o", "u"]
var fragmentos = ["enter", "imes", "ai", "ober", "ufat"]
texto.focus();

function encriptar() {
    var nuevotexto = texto.value;
    nuevotexto = nuevotexto.toLowerCase();
    texto.value = "";
    texto.focus();

    for (var i = 0; i < nuevotexto.length; i++) {
        nuevotexto = nuevotexto.replaceAll(vocales[i], fragmentos[i]);
    }

    if (nuevotexto == "") {
        document.querySelector(".textoUno").textContent = "Ningún mensaje fue encontrado";
        document.querySelector(".textoDos").textContent = "";
        document.querySelector(".ilustracion").remove();
    }
    else {
        document.querySelector(".textoUno").textContent = nuevotexto;
        document.querySelector(".textoDos").textContent = "";
        document.querySelector(".ilustracion").remove();
    }

    texto.value = "";
    texto.focus();
}

function desencriptar() {
    var nuevotexto = texto.value;
    nuevotexto = nuevotexto.toLowerCase();
    texto.value = "";
    texto.focus();
    for (var i = 0; i < nuevotexto.length; i++) {
        nuevotexto = nuevotexto.replaceAll(fragmentos[i], vocales[i]);
    }


    if (nuevotexto == "") {
        document.querySelector(".textoUno").textContent = "Ningún mensaje fue encontrado";
        document.querySelector(".textoDos").textContent = "";
        document.querySelector(".ilustracion").remove();
    }
    else {
        document.querySelector(".textoUno").textContent = nuevotexto;
        document.querySelector(".textoDos").textContent = "";
        document.querySelector(".ilustracion").remove();
    }

    texto.value = "";
    texto.focus();

}


function copiar() {
    var contenido = document.querySelector(".textoUno").textContent;
    if(contenido == "Ningún mensaje fue encontrado") {
        alert("Aún no ha escrito nada para ser copiado");
    }
    else {
        navigator.clipboard.writeText(contenido)
        .then(() => {
        console.log("Texto copiado al portapapeles");
    })
        .catch(err => {
        alert('No se pudo copiar el texto', err);
    })

    texto.value=contenido;
    texto.focus();
}
    }


var botonUno = document.querySelector(".Encriptar");
var botonDos = document.querySelector(".Desencriptar");
var botonTres = document.querySelector(".Copiar");
botonUno.onclick = encriptar;
botonDos.onclick = desencriptar;
botonTres.onclick = copiar;







