function trocaTroca(vetorA, vetorB) {
    for(let i = 0; i < vetorA.length; i++) {
        vetorA[i] = vetorA[i] + vetorB[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
    }
    
}

let vetorA = [1, 2, 3]
let vetorB = [3, 2, 1]

trocaTroca(vetorA, vetorB)


console.log('Vetor A:', vetorA) 
console.log('Vetor B:', vetorB) 