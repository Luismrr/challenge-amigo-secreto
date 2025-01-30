// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];
let indexAleatorio;

function agregarAmigo() {
    let nombreIngresado = document.getElementById("amigo").value;
    console.log(`${nombreIngresado}`);

    // si se ingresó un nombre agregarlo al arreglo amigos
    if (nombreIngresado!="") {
        amigos.push(nombreIngresado);
        document.querySelector('#amigo').value = '';
   //console.log(amigos);
    listaAmigosHtml();  // y se llama  a la lista html
    }
}

// Toma la lista amigos, la limpia y llena con elementos del arreglo
function listaAmigosHtml(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML= "";

    amigos.forEach((item) => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = item;
        listaHtml.append(elementoLista); 
    });
}

// genera elemento aleatorio del arreglo amigo y lo muestra como resultado
function sortearAmigo(){
    if (amigos.length>0){
        indexAleatorio = Math.floor(Math.random()*amigos.length);
        //console.log(indexAleatorio);
    } else { alert("Debes ingresar nombres");
    }

    var amigoSorteado = amigos[indexAleatorio];
    //console.log(amigoSorteado);
    let valorsorteado = document.getElementById("resultado");
    valorsorteado.innerHTML="";
    valorsorteado.textContent = amigoSorteado;
    }
