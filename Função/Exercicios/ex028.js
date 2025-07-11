num = []
par = []
impar = []

for (let i = 1 ; i <= 100 ; i++) {
    num.push(i)
    if (i % 2 == 0) {
        par.push(i)
    } else {
        impar.push(i)
    }
}

console.log(`Os pares encontrados foram ${par}`)
console.log(`Os impares encontrados foram ${impar}`)
