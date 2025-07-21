function segundoMaior(array){
    const sMaior = array.slice().sort((a, b) => b - a)
    return sMaior[1]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))