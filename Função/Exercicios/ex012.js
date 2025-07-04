function fatorial(a) {
    resultado = 1
    for (let i = a ; i > 1 ; i--) {
        resultado *= i
        
    }
    return resultado
}

console.log(fatorial(5))