function maiorMenor(vetor){
    let menor = vetor[0]
    let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if (maior <= vetor[i]) {
            maior = vetor[i]
        } if (menor > vetor[i]) {
            menor = vetor[i]
        }
    }
    return `O menor numero encontrado foi ${menor}, o maior numero encontrado foi ${maior}`
}

console.log(maiorMenor([-20, 7, 5, 750, 9, 20, 40, 1, 28, 10, 8, 30, 2]))
