var registro = "<tr><th>Nombre</th><th>Publisher</th><th>Correo</th><th>Tipo de consola</th><th>Estado de la consola</th><th>Fecha de adquisicion</th><th>Color de la consola</th><th>Rango de satisfacción</th></tr>";
var estilo = 0;

function registrar() {
  /* Validación de que todos los campos del formulario han sido llenados */
  if (document.getElementById("nombre").value == false) {
    alert("Nombre vacío. Debes llenar todos los campos");
  } else if (document.getElementById("pub").value == false) {
    alert("Publisher vacío. Debes llenar todos los campos");
  } else if (document.getElementById("email").value == false) {
    alert("Correo vacío. Debes llenar todos los campos");
  } else if (!document.getElementById("xbox").checked && !document.getElementById("ps5").checked && !document.getElementById("switch").checked) {
    alert("Debes seleccionar una consola.");
  } else if (!document.getElementById("nuevo").checked && !document.getElementById("usado").checked && !document.getElementById("renew").checked) {
    alert("Debes seleccionar el estado de la consola.");
  } else if (document.getElementById("fecha").value == false) {
    alert("Debes seleccionar una fecha de adquisición.");
  } else {
    /* Si todos los campos han sido llenados se prosigue con el registro */
    if (estilo % 2 == 0) {
      registro += "<tr class=\"renglon1\">";
    } else {
      registro += "<tr class=\"renglon2\">";
    }

    /* Nombre del juego */
    var x = document.getElementById("nombre").value;
    registro += "<td>" + x + "</td>";

    /* Publisher */
    x = document.getElementById("pub").value;
    registro += "<td>" + x + "</td>";

    /* Correo */
    x = document.getElementById("email").value;
    registro += "<td>" + x + "</td>";

    /* Consola */
    var consola = "";
    if (document.getElementById("xbox").checked) {
      consola = "Xbox Series S/X";
    } else if (document.getElementById("ps5").checked) {
      consola = "Playstation 5";
    } else if (document.getElementById("switch").checked) {
      consola = "Nintendo Switch";
    }
    registro += "<td>" + consola + "</td>";

    /* Estado de la consola */
    var estado = "";
    if (document.getElementById("nuevo").checked) {
      estado = "Nuevo";
    } else if (document.getElementById("usado").checked) {
      estado = "Usado";
    } else if (document.getElementById("renew").checked) {
      estado = "Reformado";
    }
    registro += "<td>" + estado + "</td>";

    /* Fecha de adquisición */
    x = document.getElementById("fecha").value;
    registro += "<td>" + x + "</td>";

    /* Color de la consola */
    x = document.getElementById("color").value;
    registro += "<td style='background-color:" + x + ";'></td>";

    /* Rango de satisfacción */
    x = document.getElementById("range").value;
    registro += "<td>" + x + "</td>";

    /* Finalización del renglón */
    registro += "</tr>";
    document.getElementById("tabla").innerHTML = registro;

    /* Limpiar los campos */
    document.getElementById("nombre").value = "";
    document.getElementById("pub").value = "";
    document.getElementById("email").value = "";
    document.getElementById("xbox").checked = false;
    document.getElementById("ps5").checked = false;
    document.getElementById("switch").checked = false;
    document.getElementById("nuevo").checked = false;
    document.getElementById("usado").checked = false;
    document.getElementById("renew").checked = false;
    document.getElementById("fecha").value = "";
    document.getElementById("color").value = "#000000";
    document.getElementById("range").value = 0;

    /* Se alterna el estilo de los renglones */
    estilo++;
  }
}
