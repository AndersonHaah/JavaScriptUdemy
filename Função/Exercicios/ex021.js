function plano(idade){
    let adicional = 100
    let valorPlano = 0
    if (idade < 10) {
        valorPlano = 80 + adicional
    } else if (idade >= 10 && idade <= 30){
        valorPlano = 50 + adicional
    } else if (idade > 30 && idade <= 60) {
        valorPlano = 95 + adicional
    } else if (idade > 60) {
        valorPlano = 130 + adicional
    } else {
        return `[ERRO]Idade incorreta, por gentileza, digite a idade corretamente.`
    }
    return `Com base na sua idade (${idade}), seu plano custa R$${valorPlano}.`
}

console.log(plano(8))
console.log(plano(20))
console.log(plano(60))
console.log(plano(28))
console.log(plano(78))
console.log(plano('a'))