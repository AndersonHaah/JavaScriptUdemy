function despesasTotais(array) {
    const resultado = array.map(m => m.preco).reduce(function(anterior, proximo){
        return anterior + proximo
    }, 0)
    return `R$${parseFloat(resultado).toFixed(2).replace('.',',')}`
}

console.log(despesasTotais([
    {nome: 'Jornal Online', categoria: 'Informação', preco: 89.99},
    {nome: 'Cinema', categoria: 'Entretenimento', preco: 150}
]))

console.log(despesasTotais([
    {nome: 'Galaxy S20', categoria: 'Eletrônicos', preco: 3599.99},
    {nome: 'MacBook Pro', categoria: 'Eletrônicos', preco: 30999.99}
]))