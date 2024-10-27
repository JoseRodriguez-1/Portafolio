function registro(){
    x = document.getElementById("nombre").value;
    x = x + ", " + document.getElementById("apellido").value;
    console.log(x);

    if(document.getElementById("male").checked)
        x = x + ", macho";
    else if(document.getElementById("female").checked)
        x = x + ", hembra";
    else 
        x = x + ", LGBTQ";

        x += " su contraseña es: " = + document.getElementById("pwd").value;
        console.log(x);

        document.getElementById("resultado").innerHTML =  x;


}