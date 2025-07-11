function numNegativos(vetor) {
    let negativos = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0) {
            negativos++
        }
    }
    return `Quantidade de numeros negativos ${negativos}`
}

console.log(numNegativos([-1, 15, -17, 62, -5, -8]))

