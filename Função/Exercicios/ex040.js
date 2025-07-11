let vetorNota = [2, 6, 8, 4, 9, 1, 10]

function conceitoNotas(vetorNota){
    let classD = []
    let classC = []
    let classB = []
    let classA = []
    for(let i = 0; i < vetorNota.length; i++) {
        if(vetorNota[i] >= 0.0 && vetorNota[i] <= 4.9){
            classD.push(vetorNota[i])
        } else if(vetorNota[i] >= 5.0 && vetorNota[i] <= 6.9){
            classC.push(vetorNota[i])
            
        } else if(vetorNota[i] >= 7.0 && vetorNota[i] <= 8.9){
            classB.push(vetorNota[i])
        
        } else if(vetorNota[i] >= 9.0 && vetorNota[i] <= 10.0){
            classA.push(vetorNota[i])
        }
        
    }   

    console.log(`Conceito D: ${classD}`)
    console.log(`Conceito C: ${classC}`)
    console.log(`Conceito B: ${classB}`)
    console.log(`Conceito A: ${classA}`)
    
}

conceitoNotas(vetorNota)