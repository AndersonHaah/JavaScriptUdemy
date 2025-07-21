function repetir(valor, repetidor){
    valorFinal = []
    for( let i = 0; i < repetidor ; i++) {
        valorFinal.push(valor)
    }

    console.log(valorFinal)
}

repetir('codigo', 2)
repetir(7, 3)
