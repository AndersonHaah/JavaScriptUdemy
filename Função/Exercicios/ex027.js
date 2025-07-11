function crianca(alt1, cres1, alt2, cres2) {
    if (alt1 == alt2 && cres1 == cres2) {
        return `A altura da menor nunca irá ultrapassar a maior!`
    }

    let menor = 0
    let maior = 0
    let ano = 0
    let cresMaior = 0
    let cresMenor = 0

    if(alt1 < alt2) {
        menor = alt1
        cresMenor = cres1
        maior = alt2
        cresMaior = cres2
    } else {
        menor = alt2
        cresMenor = cres2
        maior = alt1
        cresMaior = cres1
    }
    if (cresMenor <= cresMaior) {
        return `A menor nunca ultrapassará a maior`
    }

    while ( menor < maior ) {
        maior = maior + (cresMaior * 12)
        menor = menor + (cresMenor * 12) 
        ano = ano + 1
    }

    return `A criança menor ultrapassará a maior em ${ano} anos!`
}

console.log(crianca(60, 4, 70, 1))
console.log(crianca(60, 4, 70, 4))
console.log(crianca(70, 4, 50, 4))
console.log(crianca(60, 5, 30, 6))