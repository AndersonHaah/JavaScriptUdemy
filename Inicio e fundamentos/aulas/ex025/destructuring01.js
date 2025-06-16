// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(bemHumorada, sobrenome)

const {endereco: {logradouro, numero, cep = 60183545}} = pessoa
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa
console.log(ag, num)