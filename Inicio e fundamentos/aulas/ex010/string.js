const escola = "Cod3r"

console.log(escola.charAt(4)) // Dá a letra que está no indice 4
console.log(escola.charCodeAt(3)) // da o codigo ASCII do numero escolhido
console.log(escola.indexOf('3')) // Mostra em qual indice está essa letra

console.log(escola.substring(1)) // Inicia a palavra a partir do indice indicado
console.log(escola.substring(0, 3)) // incia a palavra até o indice indicado

console.log('Escola '.concat(escola).concat('!')) // uma forma mais complicada de formar uma frase, porém, funcional
console.log(escola.replace(3, 'e')) // substitui a letra do indice indicado 

console.log('Ana,Maria,Pedro'.split(',')) // separa cada palavra que está entre a "," e converte em array