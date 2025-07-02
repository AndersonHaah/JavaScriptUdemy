function din(x, y){
    x = 0.1 
    y = 0.2
    let valor = x + y
    let valorFormatado = valor.toFixed(2)
    let valorReal = valorFormatado.replace('.', ',')

    return 'R$' + valorReal
}

console.log(din())