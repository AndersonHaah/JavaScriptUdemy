function calcularMedia(array) {
    const resultado = array.reduce((total, valor) => total + valor)
    return resultado / array.length
}

console.log(calcularMedia([0, 10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))