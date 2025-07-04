function notas(nota) {
    if (nota < 0 || nota > 100) {
        return '[ERRO] nota inválida!'
    }


    let arredondamento = Math.ceil(nota / 5) * 5
    if ((arredondamento - nota) < 3) {
        nota = arredondamento
    }

    if (nota >= 40 && nota <= 100) {
        return `Nota: ${nota}, aluno aprovado!`
    } else if (nota < 40 && nota >= 0){
        return `Nota: ${nota}, aluno reprovado!`
    } 

}

console.log(notas(28))
console.log(notas(38))
console.log(notas(100))
console.log(notas(0))
console.log(notas(101))
console.log(notas(-1))