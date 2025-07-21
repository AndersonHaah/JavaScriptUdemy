function numeroDaSorte(num) {
    let numeroSorteado = Math.floor(Math.random() * 10) + 1
    if (num == numeroSorteado) {
        return `Parabéns! O numero sorteado foi ${numeroSorteado}`
    } else {
        return `Que pena! O numero sorteado foi ${numeroSorteado}`
    }
}

console.log(numeroDaSorte(10))
console.log(numeroDaSorte(5))
console.log(numeroDaSorte(5))
