const chucho = document.querySelector(".imagen");
const txtRespuesta = document.querySelector(".txt-respuesta");
const txtBlanco = document.querySelector(".txt-blanco");
const msjBusqueda = document.querySelector(".msj-busqueda");

//toma la informacion ingresada en el textArea de busqueda
function capturarTextArea(){
    var area = document.querySelector(".txt-busqueda");
    return area.value;
}
//permite copiar al portapapeles el texto del resultado de los botones encriptar o desencriptar
function copiar(){
    txtRespuesta.select();
    navigator.clipboard.writeText(txtRespuesta.value)
    alert("Texto Copiado");
}
//Limpia el lado derecho para luego insertar la busqueda
function ocultarCampos(){
    chucho.classList.add("ocultar");
    msjBusqueda.classList.add("ocultar");
}
// esta funcion llama a ocultarCampos y luego muestra la infomacion encriptada en el lado derecho de la pantalla
function encriptar(){
    ocultarCampos();
    txtRespuesta.textContent = encriptarText(capturarTextArea());
}
// esta funcion llama a ocultarCampos y luego muestra la infomacion desencriptada en el lado derecho de la pantalla
function desencriptar(){
    ocultarCampos();
    txtRespuesta.textContent = desencriptarText(capturarTextArea());
}

function encriptarText(txtRespuesta){
    var texto = txtRespuesta;
    var textoFinal = "";
    for(var i = 0;i <texto.length;i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai";
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter";
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes";
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "over";
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat";
        }else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

function desencriptarText(txtRespuesta){
    var texto = txtRespuesta;
    var textoFinal = "";
    for(var i = 0;i <texto.length;i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a";
            i = i + 1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e";
            i = i + 4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i";
            i = i + 3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o";
            i = i + 3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u";
            i = i + 3;
        }else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;
}

