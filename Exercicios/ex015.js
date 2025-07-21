function receberSomenteOsParesDeIndicesPares(array) {
    const arrayFinal = []
    for( let i = 0; i < array.length; i++ ) {
        if ( array[i] % 2 == 0 && i % 2 == 0 ) {
            arrayFinal.push(array[i])
        }
    }
    return arrayFinal
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4, 5]))
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))