function imprimirImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
       let temp = inicio
       inicio = fim
       fim = temp
    }

    let impares = []

    for(let i = inicio; i <= fim; i++){
        if(i % 2 == 1) {
            impares.push(i)
        }
    }
    return impares
}

console.log(imprimirImpares(10, 100))
console.log(imprimirImpares(0, 100))
console.log(imprimirImpares(55, 100))
console.log(imprimirImpares(200, 100))