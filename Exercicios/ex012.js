function removerPropriedade(obj, propriedade) {
    delete obj[propriedade]
    console.log(obj)
}

removerPropriedade({a: 1, b: 2}, "a")
removerPropriedade({
    id: 20,
    nome: 'Caneta',
    descricao: 'Não preenchido'
}, 'descricao')

Object.is(removerPropriedade(obj, proriedade), obj)