"use strict";
const textareaMensaje = document.querySelector("#message");
const textareaResultado = document.querySelector("#résultat");
const btnEncriptar = document.querySelector("#crypter");
const btnDesencriptar = document.querySelector("#décrypter");
const btnCopiar = document.querySelector("#copier");
const btnHablar = document.querySelector("#écouter");
const btnLimpiar = document.querySelector("#Nettoyer");
const tarjeta1 = document.querySelector("#texte-1");
function validarMensaje() {
    let erroresPrevios = tarjeta1.querySelectorAll(".error");
    for (let err of erroresPrevios) {
        tarjeta1.removeChild(err);
    }
    var mensaje = textareaMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for (let letra of mensaje) {
        if (!letrasValidas.includes(letra)) {
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            p.textContent = `La letra ${letra} no es valida`;
            mensajeError.appendChild(p);
        }
    }
    tarjeta1.appendChild(mensajeError);
    if (mensajeError.children.length === 0) {
        return true;
    }
    return false;
}
function encriptar() {
    if (!validarMensaje())
        return;
    var mensaje = textareaMensaje.value;
    var mensajeEncriptado = mensaje
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    textareaResultado.value = mensajeEncriptado;
}
function desencriptar() {
    if (!validarMensaje())
        return;
    var mensajeEncriptado = textareaMensaje.value;
    var mensaje = mensajeEncriptado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    textareaResultado.value = mensaje;
}
function copiar() {
    var mensajeEncriptado = textareaResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}
function escuchar() {
    var mensajeEncriptado = textareaResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-ES";
    window.speechSynthesis.speak(msg);
}
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnHablar.onclick = escuchar;
btnHablar.onclick = limpiar;
