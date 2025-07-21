function contarPalavra(string){
    return string.trim().split(/\s+/).length
}

console.log(contarPalavra('Sou uma frase'))
console.log(contarPalavra('Me divirto aprendendo a programar'))