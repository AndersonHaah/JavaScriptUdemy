const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]
pilotos.pop() // remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') // adiciona no final da lista
console.log(pilotos)

pilotos.shift() // remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona no começo
console.log(pilotos)

//splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // remove a 1 apartir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // copia os elementos a partir do indice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
