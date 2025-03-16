let nombres = []; // Lista donde se guardarán los nombres

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".button-add").addEventListener("click", agregarAmigo);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Obtener el valor sin espacios extra
    
    if (nombre !== "") { // Solo agregar si el input no está vacío
        nombres.push(nombre);
        actualizarLista();
        input.value = ""; // Limpiar el input después de agregar
    } 
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    nombres.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nombres.length);
    let nombreSorteado = nombres[indiceSorteado];

    // Mostrar el resultado en la lista de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 ${nombreSorteado} es el amigo sorteado 🎉</li>`;
}
