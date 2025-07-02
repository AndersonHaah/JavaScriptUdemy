function Pessoa(idadeMaxima = 25 , delta = 5) {
    let idade = 0

    this.envelhecer = function() { 
        if (idade + delta <= idadeMaxima) {
            idade += delta
        } else {
            console.log(`Sua idade é acima de ${idade}, você não está mais apto para este brinquedo.`)
        }
    }
    this.getidade = function() {
        return idade
    }
}

const Ana = new Pessoa
Ana.envelhecer()
Ana.envelhecer()
Ana.envelhecer()
Ana.envelhecer()
Ana.envelhecer()
Ana.envelhecer()
console.log(Ana.getidade())


/* class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
} */