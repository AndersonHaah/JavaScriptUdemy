function bhaskara(a, b, c) {
    let delta = (b ** 2) - 4 * a * c 
    if (delta < 0) {
        return 'Delta é negativo'
    } else {
        let raizDelta = Math.sqrt(delta)
        let numerosReais = [(-b + raizDelta) / (2 * a), (-b - raizDelta) / (2 * a)]
        return numerosReais
    }
}

console.log(bhaskara(1, -3, -4))
console.log(bhaskara(10, 5, 4))