//Se declara el array
let amigos = [];

//Agregar amigos al array
function agregarAmigo() {

    let inputAgregar = document.querySelector('input').value;

    if(inputAgregar == ""){
        alert("Por favor, inserte un nombre.");
    } else{
        amigos.push(inputAgregar);
    }
    return
}

//Permite mostrar los amigos ingresados
function renderizarAmigo(){

    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += '<li>' + amigos[i] + '</li>'; 
    }
    
    return
}

//Borra el campo de texto introducido despues de haber agregado el amigo
function restearCampo(){
    let inputAgregar = document.querySelector('input').value = '';
    return
}

//Se sortea el amigo
function sortearAmigo() {
    let result = document.getElementById('resultado');
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

    if(amigos.length === 0){
        alert("Debe de haber algun nombre para poder sortear");

    } else if(amigos.length === 1){
        alert("Por favor, inserta mas nombres para poder hacer el sorteo");
    }
     else{
        result.innerHTML = `El amigo sorteado es: ${amigos[amigoAleatorio]}`;
    }
    return
}
