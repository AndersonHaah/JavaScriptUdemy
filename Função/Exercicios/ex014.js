function frutas(fruta){
    switch(fruta.toLowerCase()) {
        case 'maçã':
            return 'Não vendemos esta fruta aqui!'
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
        case 'melancia':
            return 'Aqui está, são 3R$ o Kg'
        default: 
            return 'Sei nem que fruta é essa meu amigo'
    }
}
console.log(frutas('Maçã'))
console.log(frutas('Kiwi'))
console.log(frutas('Melancia'))
console.log(frutas('Pêra'))