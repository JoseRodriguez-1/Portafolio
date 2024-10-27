function Calcular(){

    x = document.getElementById("num").value;
    console.log(x);
    var salida =1;
    
    if (x > 0){

        for (var i = x; i >= 1; i--) {
            salida *= i;
            console.log(salida);

        }
         
        salida =  x + "! =" + salida;  

    }else if (x == 0){

        salida = "El resultado es 1";
        console.log(salida)

    }else{

        salida = "El factorial no esta definido"
        console.log(salida)
}
    document.getElementById("Calcular").innerHTML = salida;
}