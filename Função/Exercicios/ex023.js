function aluno(codigo, n1, n2, n3) {
    if(codigo < 0){
        return `[ERRO] Codigo inexistente! Verifique o codigo e tente novamente.`
    }
    let notas = [n1, n2, n3].sort((a, b) => b - a)
    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    let status = media >= 5 ? "APROVADO" : "REPROVADO"
    return `Código: ${codigo} Notas: ${n1}, ${n2}, ${n3} Média: ${media.toFixed(2)} Situação: ${status}`
}

console.log(aluno(123, 6, 7, 4))
console.log(aluno(600, 8, 9, 8))
console.log(aluno(123, 3, 4, 4))
console.log(aluno(123, 5, 7, 10))