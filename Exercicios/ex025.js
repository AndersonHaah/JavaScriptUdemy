function buscarPalavrasSemelhantes (string, array) {
    return array.filter(palavra => palavra.includes(string))
}

console.log(buscarPalavrasSemelhantes('pro', ['programação', 'mobile', 'profissional']))
console.log(buscarPalavrasSemelhantes('python', ['javascript', 'java', 'c++']))