// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value;
    console.log(`${nombreIngresado}`);
    amigos.push(nombreIngresado);
    console.log(amigos);
    listaAmigosHtml();
}

//console.log(amigos);

function listaAmigosHtml(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML= "";

    amigos.forEach((item) => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = item;
        listaHtml.append(elementoLista);
    });

}
