function contarCaractere(carac, string){
    carac = carac.toLowerCase()
    string = string.toLowerCase()

    let contador = 0
    for (let i = 0; i < string.length ; i++) {
        if(carac === string[i]) {
            contador++
        }
    }
    return contador
}

console.log(contarCaractere('r', 'A sorte favorece os audazes'))
console.log(contarCaractere('c', 'Conhece-te a ti mesmo'))