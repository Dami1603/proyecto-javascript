function sacarturno(){
    let disponible = true
    let intentos = 1
    do{
        alert("Turnos de Doctor Disponibles: \n Manuel de 10hs a 12hs \n Damian de 8hs a 10hs")
        let turnodoctor = prompt("Ingresa el nombre del doctor:")

        if (turnodoctor == null || turnodoctor == "") {
            alert("no se reconece el doctor ingresado, intente nuevamente")
            break;
        }
        if ((turnodoctor == "Manuel" || turnodoctor == "Damian") && intentos<=3){
            let turnohora = prompt("Ingresa el horario del turno:")
            if( turnohora == null){
                break;
            }
            if( turnodoctor == "Manuel" && turnohora >=10 && turnohora <=12 || turnodoctor == "Damian" && turnohora >=8 && turnohora <=10){
                alert("Excelente tu turno con el doctor "+turnodoctor+ "\nfue agendado para las: "+turnohora+ "hs")
                disponible = false
            }else{
                alert("Horario no disponible");
                intentos++
                if(intentos>3){
                    alert("se supero los intentos, intente mas tarde")
                    console.error("No existen turnos disponibles")
                    break;
                }                                  
            }       
        }
    }while(disponible)
}

sacarturno()