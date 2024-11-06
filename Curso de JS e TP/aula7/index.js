// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modeficar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

// diferente da variavel let a const não é mutavel
// const nome = 'Godoi';
// nome = 'Otavio';

// console.log(nome);

// const primeiroNumero = 5;
// const segundoNumero = 10;
// const resultado = primeiroNumero * segundoNumero;
// console.log(resultado);

const produtoInversor = 150;
const produtoPainel = 300;
const produtoEstrutura = 140;
let descontoPainel = 25;
const valorTotal = produtoInversor + produtoPainel + produtoEstrutura - descontoPainel;
console.log('O valor total do gerador é de ' + '' + valorTotal);