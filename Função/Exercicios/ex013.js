function diaUtil(dia){
    switch(dia){
        case 1: 
            console.log('Hoje é domingo, não é dia util!')
            break
        case 2:
            console.log('Hoje é segunda-feira, é dia util!')
            break
        case 3:
            console.log('Hoje é terça-feira, é dia util!')
            break
        case 4:
            console.log('Hoje é quarta-feira, é dia util!')
            break
        case 5:
            console.log('Hoje é quinta-feira, é dia util!')
            break
        case 6:
            console.log('Hoje é sexta-feira, é dia util!')
            break
        case 7:
            console.log('Hoje é sabado, é dia util apenas para pagamentos!')
            break
        default:
            console.log('[ERRO] DATA INCORRETA INSERIDA!')
    }

}

diaUtil(1)
diaUtil(2)
diaUtil(3)
diaUtil(4)
diaUtil(5)
diaUtil(6)
diaUtil(7)
diaUtil(8)