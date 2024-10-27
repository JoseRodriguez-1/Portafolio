function Enviar(){
    salida = "Nombre: " + document.getElementById("name").value + ", ";
    console.log(salida)

    salida += "Email: " +document.getElementById("mail").value + ", ";
    console.log(salida);

    salida += "Edad: " + document.getElementById("age").value + ", ";
    console.log(salida);

    if (document.getElementById("male").checked) {
        salida += "Género: Hombre, ";
    } else if (document.getElementById("female").checked) {
        salida += "Género: Mujer, ";
    } else {
        salida += "Género: Otro, ";
    }

    salida += "Fecha de nacimiento: " + document.getElementById("date").value + ", ";
    console.log(salida);

    salida += "Color favorito: " + document.getElementById("color").value + ", ";
    console.log(salida);
    
    document.getElementById("Enviar").innerHTML = salida 
}