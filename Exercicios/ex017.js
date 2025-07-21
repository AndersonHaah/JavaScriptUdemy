function somarNumeros(array){
    const resultado = array.reduce(function(anterior, somado){
        return anterior + somado
    })
    return resultado
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))