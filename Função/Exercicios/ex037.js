function PA(n, a1, r) {
    let termos = []

    for(let i = 0; i < n; i++){
        let termo = a1 + i * r
        termos.push(termo)
    }
    let soma = termos.reduce((acum, atual) => acum + atual, 0)

    console.log(`PA com ${n} termos: ${termos.join(', ')}`)
    console.log(`Soma dos termos: ${soma}`)
}
PA(5, 2, 3)
PA(4, 3, 2)

function PG(n, a1, r) {
    let termos = []

    for(let i = 0; i < n; i++){
        let termo = a1 * Math.pow(r, i)
        termos.push(termo)
    }
    let soma = termos.reduce((acum, atual) => acum + atual, 0)

    console.log(`PG com ${n} termos: ${termos.join(', ')}`)
    console.log(`Soma dos termos: ${soma}`)

}

PG(5, 2, 3)
PG(4, 3, 2)