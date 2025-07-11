function media(vetor) {
    let soma = 0
    for(let i = 0; i < vetor.length; i++){
        soma = soma + vetor[i]
    }
    return `A média dos valores é ${soma / vetor.length}`
}

console.log(media([5, 8, 5, 8, 10]))