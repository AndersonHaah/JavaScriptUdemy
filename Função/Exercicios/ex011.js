function anoBi(ano) {
    if ((ano % 4 == 0 && ano % 100 !== 0) || (ano % 400 == 0)) {
        return true
    } else {
        return false
    }
}

console.log(anoBi(2024))
console.log(anoBi(1900))
console.log(anoBi(2000))
console.log(anoBi(2023))