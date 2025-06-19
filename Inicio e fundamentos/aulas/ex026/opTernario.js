const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

/* Operador ternario é feito em tres partes,a expressão (nota >= 7), o primeiro retorno ('Aprovado'), ou o segundo retorno caso a expressão seja falsa ('Reprovado'), que são separados por (:) */