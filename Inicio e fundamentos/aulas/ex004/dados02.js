let preco = 19.90;
let desconto = 0.4;

console.log(19.9 * 0.6)

let precoComDesconto = preco * (1 - desconto)
console.log(precoComDesconto)

let nome = "Caderno" // String (Texto) -> Conjunto de caracteres
let categoria = "Papelaria"
console.log(
    "Produto: " + nome
    + " Categoria: " + categoria
    + " Preço: " + preco
    + ", Desconto " + desconto
    + ", Preço final: " + precoComDesconto) 
