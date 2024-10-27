function agregarTarea() {
    var tareaTexto = document.getElementById("nuevaTarea").value.trim();

    // Validar que la tarea no esté vacía
    if (tareaTexto === "") {
        alert("Debes escribir una tarea.");
        return;
    }

    // Crear una nueva fila en la tabla de tareas pendientes
    var tablaPendientes = document.getElementById("listaPendientes");
    var nuevaFila = document.createElement('tr');

    // Crear la celda con el checkbox y el texto de la tarea
    var nuevaCelda = document.createElement('td');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = moverACompletadas; // Se llama a la función para mover las tareas

    var textoTarea = document.createTextNode(tareaTexto);

    // Se añade una checkbox y el texto a la celda
    nuevaCelda.appendChild(checkbox);
    nuevaCelda.appendChild(textoTarea);

    // Añadir la celda a la fila
    nuevaFila.appendChild(nuevaCelda);

    // Añadir la fila a la tabla de pendientes
    tablaPendientes.appendChild(nuevaFila);

    // Limpiar el input después de agregar la tarea
    document.getElementById("nuevaTarea").value = "";
}

function moverACompletadas() {
    var fila = this.parentElement.parentElement; // Obtener la fila completa
    var tablaCompletadas = document.getElementById("listaCompletadas");

    // Marcar la tarea como completada (tachar el texto)
    this.parentElement.style.textDecoration = "line-through";

    // Remover la fila de la lista de pendientes
    this.parentElement.parentElement.remove();

    // Agregar la fila a la lista de completadas
    tablaCompletadas.appendChild(fila);
}

function borrarLista() {
    // Limpiar ambas tablas
    document.getElementById("listaPendientes").innerHTML = "";
    document.getElementById("listaCompletadas").innerHTML = "";
}
