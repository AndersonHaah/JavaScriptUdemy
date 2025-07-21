function objetoParaArray(obj){
    Object.defineProperty(obj, 'toString', {
        value: function() { return Object(this)}
    })
    console.log(obj.toString())
}


objetoParaArray({
    nome: 'Maria',
    profissao: 'Desenvolvedora de software'
})

objetoParaArray({
    codigo: 11111,
    preco: 1200
})