function multiplicar(num1, num2) {
    mult = 0
    for (let i = 0; i < num1; i++) {
        mult = mult + num2
    }
    return mult
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))
console.log(multiplicar(2, 7))
console.log(multiplicar(2, 80))