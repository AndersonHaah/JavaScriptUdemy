const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log([valores[undefined]])

valores[4] = 10
console.log(valores)
console.log(valores.length) // mostra quantos elementos tem no array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // imprime apenas o ultimo valor do array
delete valores[0] // deleta o elemento indicado
console.log(valores)

console.log(typeof valores)