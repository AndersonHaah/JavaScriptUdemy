let vetorInteiro = [1, 7, 3, 2]
let vetorString = ['Olá', 'Mundo', 'Estou', 'Programando']
let vetorDouble = [0.1, 0.6, 0.3, 0.4]

var uniao = vetorInteiro.concat(vetorDouble, vetorString)

console.log(uniao)

var uniao = vetorDouble.concat(vetorInteiro, vetorString)

console.log(uniao)