function classificarTriangulo(lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3) {
        return 'Equilátero'
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificarTriangulo(1, 1, 1))
console.log(classificarTriangulo(1, 5, 1))
console.log(classificarTriangulo(1, 2, 3))