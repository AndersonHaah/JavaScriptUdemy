function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do {
    console.log(getInteiroAleatorioEntre(-1, 10))
    console.log(`A opção escolhida foi ${opcao}!`)
} while (opcao != -1)

console.log('Até a proxima!')