function jogosBasq() {
    let jogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]
    let recorde = jogos[0]
    let quantQuebraRec = 0
    let piorPontuacao = jogos[0]
    let indiPior = 1
    let i = 1
    while (i < jogos.length) {
        if (jogos[i] > recorde){
            quantQuebraRec++
            recorde = jogos[i]
        }
        if (jogos[i] < piorPontuacao) {
            piorPontuacao = jogos[i]
            indiPior = i + 1
        }
        i++
    }
return [quantQuebraRec, indiPior]
}

console.log(jogosBasq())
