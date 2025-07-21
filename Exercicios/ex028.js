function filtrarPorQuantidadeDeDigitos(array, num) {
    return array.filter(function(p){
        return p.toString().length === num
    })
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))