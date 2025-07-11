function mult(vetor, numInt){
    let vetorMult = []
    for(let i = 0; i < vetor.length; i++) {
        vetorMult.push(vetor[i] * numInt)
    }
    return vetorMult
}

console.log(mult([3, 5, 1, 10], 2))
console.log(mult([5, 6, 0, 9], 6))
console.log(mult([2, 9, 12, 7], 5))

function mult5(vetor, numInt) {
    let vetorMult = []
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > 5){
            vetorMult.push(vetor[i] * numInt)
        }
    }

    return vetorMult
}

console.log(mult5([3, 5, 1, 10], 2))
console.log(mult5([5, 6, 0, 9], 6))
console.log(mult5([2, 9, 12, 7], 5))