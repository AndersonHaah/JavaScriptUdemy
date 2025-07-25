Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i ++) {
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

console.log(produtos.filter2(function (p){
    return false
}))

console.log('--------FORMA DO PROFESSOR---------')
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))

console.log('-------MINHA FORMA DE FAZER--------')
let resultado = produtos.filter2(function(p){
    return p.preco > 500
}).filter2(function(p){
    return p.fragil == true
})

console.log(resultado)