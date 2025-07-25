// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções contrutoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.151)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(`O preço da ${p1.nome} é R$${p1.getPrecoComDesconto().toFixed(2).replace('.', ',')} e o preço do ${p2.nome} é R$${p2.getPrecoComDesconto().toFixed(2).replace('.', ',')}`)

// Função Factory 
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto..
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)