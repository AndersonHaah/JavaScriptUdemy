function cardapio(codigo, quantidade){

    switch (codigo){
        case 100 :
            valor = quantidade * 3
            pedido = 'Cachorro quente'
            break
        case 200 :
            valor = quantidade * 4
            pedido = 'Hamburguer Simples'
            break
        case 300 :
            valor = quantidade * 5.50
            pedido = 'Cheeseburguer'
            break
        case 400 :
            valor = quantidade * 7.50
            pedido = 'Bauru'
            break
        case 500 :
            valor = quantidade * 3.50
            pedido = 'Refrigerante'
            break
        case 600 :
            valor = quantidade * 2.80
            pedido = 'Suco'
            break
        default:
            return 'Não existe este produto no nosso cardápio!'
    }
    return `O pedido é ${pedido}, o valor com base na quantidade é R$${valor.toFixed(2).toString().replace('.', ',')}`
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 3))
console.log(cardapio(300, 1))
console.log(cardapio(400, 5))
console.log(cardapio(500, 2))
console.log(cardapio(600, 3))
console.log(cardapio(700, 1))