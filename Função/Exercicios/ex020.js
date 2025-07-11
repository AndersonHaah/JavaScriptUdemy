function notas(nota) {
    const notas = [100, 50, 20, 10, 5, 2]
    for (let i = 0; i < notas.length; i++){
        let notaAtual = notas[i]
        let quantidade = Math.floor(nota / notaAtual)
        if (quantidade > 0 ){ 
            console.log(`${quantidade} nota(s) de R$ ${notaAtual}`)
            nota = nota - (quantidade * notaAtual)
        }
    }
}

notas(287)