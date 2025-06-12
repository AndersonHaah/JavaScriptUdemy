const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // analisa para ver se o numero é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2)) // define a quantidade de casas decimais que irão ser imprimidas
console.log(media.toString(2)) // transforma o valor de media para string, o numero 2 transforma ele em binario
console.log(typeof media)
console.log(typeof Number)