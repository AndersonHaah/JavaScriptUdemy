const nome = "Rebeca"
const concatenacao = "Olá " + nome + "!"

const template = `
    Olá
    ${nome}!
`

console.log(concatenacao)
console.log(template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // função que transforma as letras em maiusculas
console.log(`Ei... ${up('cuidado')}!`)