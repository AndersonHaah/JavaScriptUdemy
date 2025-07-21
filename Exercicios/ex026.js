function removerVogais(string){
    return string.replace(/[aeiou]/gi, '')
}

console.log(removerVogais('Cod3r'))
console.log(removerVogais('Fundamentos'))