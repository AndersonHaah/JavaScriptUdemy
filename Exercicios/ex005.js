function maiorOuIgual(inicial, comparativo){

    if(inicial > comparativo || inicial === comparativo) {
        console.log(true)
    } else {
        console.log(false)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(0, '0')
maiorOuIgual(5, 1)
maiorOuIgual(1, 5)
