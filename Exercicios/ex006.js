function inverso(entrada) {
   if (typeof entrada === 'boolean') {
        console.log(!entrada)
   } else if (typeof entrada === 'number') {
        console.log(-entrada)
   } else {
        console.log('Entrada incorreta')
   }
}

inverso('p')
inverso(true)
inverso('6')
inverso(-2000)
inverso(2000)