function vendaCarro(carro){
    switch(carro.toLowerCase()) {
        case 'hatch':
            return 'Compra efetuada com sucesso!'
        case 'sedan': 
        case 'motocicleta': 
        case 'caminhonete':
            return  'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de veiculo!'
    }
}

console.log(vendaCarro('Hatch'))
console.log(vendaCarro('Sedan'))
console.log(vendaCarro('motocicleta'))
console.log(vendaCarro('Caminhonete'))
console.log(vendaCarro('SUV'))