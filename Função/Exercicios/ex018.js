function zeroDez(a) {
    switch (a){
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default: 
            return '[ERRO] Numero fora do intervalo!'
    }
}

console.log(zeroDez(0))
console.log(zeroDez(1))
console.log(zeroDez(2))
console.log(zeroDez(3))
console.log(zeroDez(4))
console.log(zeroDez(5))
console.log(zeroDez(6))
console.log(zeroDez(7))
console.log(zeroDez(8))
console.log(zeroDez(9))
console.log(zeroDez(10))
console.log(zeroDez(11))