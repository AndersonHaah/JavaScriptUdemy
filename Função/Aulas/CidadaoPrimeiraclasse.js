// Função em JSh é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenando dentro de uma variavel
const fun2 = function() { }

// Armazenando em um array
const array = [function(a, b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

// Armazenando em um atributo de um objeto 
const obj = { }
obj.falar = function () {return 'Opa!'}
console.log(obj.falar())

// Armazenando em parametro de funcao
function run(fun) {
    fun()
}

run(function () {console.log('Executando...')})

// Uma função pode retornar e conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)