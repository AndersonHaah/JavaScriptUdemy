function filtrarNumeros(array) {
    const novoArray = []
    for (let i = 0; i < array.length ; i++) {
        if (typeof array[i] == 'number') {
            novoArray.push(array[i])
        }
    }
    console.log(novoArray)
}

filtrarNumeros(['JavaScript', 1, '3', 20])
filtrarNumeros(['a', 'b'])
filtrarNumeros(['a', 'b', 17, 21])
filtrarNumeros(['a', 'b', true, 21])