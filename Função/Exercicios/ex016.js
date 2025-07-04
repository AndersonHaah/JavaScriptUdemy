function calculadora(num1, operador, num2){
    switch(operador.trim()) {
        case '+': 
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            if (num2 === 0) {
                return '[ERRO] Não é possivel fazer divisão por zero!'
            }
            return num1 / num2
        default:
            return '[ERRO] Operador incorreto! Por favor utilize "+", "-", "*" ou "/"'
    }
}

console.log(calculadora(3, '+', 4))
console.log(calculadora(3, '*', 4))
console.log(calculadora(3, '/', 4))
console.log(calculadora(3, '-', 4))
console.log(calculadora(3, '%', 4))
console.log(calculadora(3, '/', 0))
console.log(calculadora(0, '/', 4))