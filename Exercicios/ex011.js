function rebecerPrimeiroEUltimoElemento(array){
    let primeiro = array.shift()
    let ultimo = array.pop()
    novoArray = [primeiro, ultimo]
    console.log(novoArray)
}

rebecerPrimeiroEUltimoElemento([7, 14, 'ola'])
rebecerPrimeiroEUltimoElemento([-100, 'aplicativo', 16])