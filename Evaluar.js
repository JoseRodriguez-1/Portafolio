function Evaluar(){

    x = document.getElementById("calif").value;
    console.log(x);

    if(x <= 6 ){
        salida = "Tu calificacion es: " + x + " por lo tanto su equivalencia es NA";
        console.log(salida);
    }else if(x >= 6 && x < 7.5){
        salida = "Tu calificacion es: " + x + " por lo tanto su equivalencia es S";
        console.log(salida);
    }else if(x >= 7.5 && x < 9){
        salida = "Tu calificacion es: " + x + " por lo tanto su equivalencia es B";
        console.log(salida);
    }else if(x >= 9 && x < 10 ){
        salida = "Tu calificacion es: " + x + " por lo tanto su equivalencia es MB";
        console.log(salida);
    }else if(x == 10){
        salida = "Tu calificacion es: " + x + " por lo tanto su equivalencia es LAP";
        console.log(salida);
    }else {
        salida = "La calificacion no es valida"
        
    }

    document.getElementById("Evaluar").innerHTML = salida;

}