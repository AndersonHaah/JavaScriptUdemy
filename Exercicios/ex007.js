function estaEntre(numero, inicial, maximo, inclusivo = false) {
    if (inclusivo == true) {
        console.log(numero >= inicial && numero <= maximo)
    } else {
        console.log(numero > inicial && numero < maximo)
    }
    
}

estaEntre(70, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)