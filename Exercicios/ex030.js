function receberMelhorEstudante(obj){
    const alunos = Object.entries(obj)
    const medias = alunos.map(([nome, notas]) => {
        const soma = notas.reduce((total, nota) => total + nota, 0)
        const media = soma / notas.length
        return {nome, media}
    })
    const melhorAluno = medias.reduce((maior, atual) => {
        return atual.media > maior.media ? atual : maior
    })
    return melhorAluno
}



console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
}))