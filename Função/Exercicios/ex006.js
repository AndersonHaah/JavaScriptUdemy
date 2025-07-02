function montanteApli(capInicial, taxaJuros, tempoApli) {
    let juros = capInicial * taxaJuros * tempoApli
    let montanteFinal = juros + capInicial
    return montanteFinal
}
console.log('----------------COM JUROS SIMPLES------------------')
const res = montanteApli(1000, 0.02, 6)
console.log('R$' + res.toFixed(2).replace('.' , ','))

function montanteApliJuros(capInicial, taxaJuros, tempoApli) {
    let montante = capInicial * Math.pow((1 + taxaJuros), tempoApli)
    return montante
}
console.log('---------------COM JUROS COMPOSTOS-----------------')
const resultado = montanteApliJuros(1000, 0.02, 6)
console.log('R$' + resultado.toFixed(2).replace('.', ','))