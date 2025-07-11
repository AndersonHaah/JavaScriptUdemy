function analisarIntevalo(vetor) {
    let dentro = 0
    let fora = 0

    for (let i = 0; i < vetor.length; i++) {
        let numero = vetor[i]
        if (numero >= 10 && numero <= 20) {
            dentro++
        }else {
            fora++
        }
    }

    console.log(`Dentro do intervalo: ${dentro}`)
    console.log(`Fora do intervalo: ${fora}`)

}

analisarIntevalo([5, 10, 12, 25, 19, 30])



function numeros(qnt) {
    let numDentro = []
    let numFora = []
    let contDentro = 0
    let contFora = 0
    for (let i = 1 ; i <= qnt ; i++) {
        if (i % 10 == 0) {
            contDentro = contDentro + 1
            numDentro.push(i)
        } else {
            contFora = contFora + 1
            numFora.push(i)
        }
    }
    console.log(`A quantidade de dezenas no intervalo de ${qnt} são ${contDentro}, e fora do intevalo de dezenas são ${contFora}`)
    console.log(`Numeros dentro: ${numDentro}`)
    console.log(`Numeros fora: ${numFora}`)
}

numeros(20)