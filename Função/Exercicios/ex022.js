function anuidade(mes, valor) {
    if (mes < 1 || mes > 12){
        return `[ERRO] mês incorreto digitado, por favor corrija e tente novamente.`
    }
    const nomeMeses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
    let nomeDoMes = nomeMeses[mes - 1]
    let juros = 0.05
    let atraso = mes - 1  
    let valorFinal = valor * Math.pow(1 + juros, atraso)
    
    return `Como você escolheu o mes de ${nomeDoMes}(${mes}) para pagar, o valor final ficou em R$${valorFinal.toFixed(2).replace('.', ',')}`
}

console.log(anuidade(3, 1200))
console.log(anuidade(7, 1000))
console.log(anuidade(1, 3000))