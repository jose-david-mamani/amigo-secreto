let nombres = []; // arrays donde se guardaran los nombres

// Función para agregar un nombre  
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco antes de la validación

    if (nombre === "") { 
        alert("Por favor ingrese un nombre valido"); 
        return;  //aqui se termina
    } 
    
    // si el nombre es válido, lo agregamos a la lista
    nombres.push(nombre);
    actualizarLista();

    // limpiar input
    input.value = ""; 
}

// funcion para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar la lista antes de actualizar

    nombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// función para sortear un amigo aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("no ahy nombres en la lista");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceSorteado];

    // eliminar la lista de amigos dejando solo el ganador
    nombres = [nombreSorteado]; 
    actualizarLista(); // mostrar solo el ganador en la lista

    // mostrar el resultado en la lista de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo sorteado es: ${nombreSorteado} </li>`;
}

