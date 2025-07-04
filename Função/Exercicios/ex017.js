function aumentoSalario(salarioAtual, plano){
    let salario
    switch (plano.toLowerCase()){
        case 'plano a':
            salario = salarioAtual + (salarioAtual * 0.10)
            return `O seu salario agora é R$${salario.toFixed(2).toString().replace('.', ',')}`
        case 'plano b':
            salario = salarioAtual + (salarioAtual * 0.15)
            return `O seu salario agora é R$${salario.toFixed(2).toString().replace('.', ',')}`
        case 'plano c':
            salario = salarioAtual + (salarioAtual * 0.20)
            return `O seu salario agora é R$${salario.toFixed(2).toString().replace('.', ',')}`
        default:
            return 'Plano inválido'
    }
}

console.log(aumentoSalario(1000, 'Plano a'))
console.log(aumentoSalario(1556.00, 'Plano b'))
console.log(aumentoSalario(1500.00 ,'Plano c'))
