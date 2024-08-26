const d = document;
const textArea = d.querySelector("#presentacion1_texto"); 
const resultadoDado = d.querySelector("#informativo_Desencriptado"); 
const resultadoTexto = d.querySelector(".informativo_texto");
const botonEncriptar = d.querySelector(".btn_encriptar");
const botonDesencriptar = d.querySelector(".btn_desencriptar");
const botonCopiar =d.querySelector("#btn1_copiar");
const botonLimpiar= d.querySelector("#btn1_limpiar");

const codigomensaje = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

/*-----------Función encriptar---------------*/

function encriptarTexto(mensaje) {
    let regex = /[^\w\s]/gi; 
    if ( regex.test(mensaje)){
        alert("No se aceptan caracteres especiales, intenta de nuevo."); /*----------Sin Caracteres--.------*/
        return;}

    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
        let letra = mensaje[i];
        let encriptada = letra;

        for (let j = 0; j < codigomensaje.length; j++) {
            if (letra == codigomensaje[j][0]) {
                encriptada = codigomensaje[j][1]; 
                break;
            }
        }
        mensajeEncriptado += encriptada;
    }
    return mensajeEncriptado;
}

/*-----------------Función Desencriptar--------------*/

function desencriptarTexto(mensaje) {

    let mensajeDesencriptado = mensaje.toLowerCase();
    for (let i = 0; i < codigomensaje.length; i++) {
        let regex = new RegExp(codigomensaje[i][1], 'g'); 
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, codigomensaje[i][0]); 
    }
    return mensajeDesencriptado;
}
/*-------------------- Cuando el usuario  este ingresando información--------------*/
textArea.addEventListener("input", (e) => {
    resultadoTexto.textContent = "Capturando mensaje...";
    resultadoDado.textContent = "";
});
/*--------------------- Boton Encriptar-----------------------*/
botonEncriptar.addEventListener("click", (e) => {
    let mensaje = textArea.value.toLowerCase();
   let mensajeEncriptado= encriptarTexto(mensaje);
    resultadoDado.value= mensajeEncriptado;
    resultadoTexto.textContent = " Mensaje Encriptado";

});
/*--------------------Boton Desencriptar------------------*/
botonDesencriptar.addEventListener("click", (e) => {
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado= desencriptarTexto(mensaje);
    resultadoDado.value= mensajeDesencriptado;
    resultadoTexto.textContent = " Mensaje Desencriptado";
});
/*---------------------Boton Copiar -------------------------*/
botonCopiar.addEventListener('click', () => {
    let textoCopiado = resultadoDado.value;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
        resultadoTexto.textContent = " Texto copiado";

    })
});
/*---------------------Boton Limpiar -----------------------*/
botonLimpiar.addEventListener("click", () => {
    textArea.value = "";
    resultadoDado.value = "";
    resultadoTexto.textContent = "Texto eliminado";
});