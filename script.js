var nome= prompt("Insira seu nome: ");
var idade=parseInt(prompt("Insira sua idade: "));

var nomeIdade = ("Seu nome é " + nome + "e sua idade é "+ idade);
alert("Seja bem-vindo, confira suas informações: "+ nomeIdade);
console.log(nomeIdade)

var numero = parseInt(prompt("Insira um numero: "));
var numero2 = parseInt(prompt("Insira outro numero: "));
console.log("O primeiro número inserido foi:", numero);
console.log("O segundo número inserido foi:", numero2);

var resultadoSoma=numero+numero2;
var resultadoSubtracao=numero-numero2;
var resultadoMultiplicacao=numero*numero2;
var resultadoDivisao=numero/numero2;
alert("Confira no console operações feitas com os números inseridos.");
console.log("Soma: ",resultadoSoma);
console.log("Subtração: ",resultadoSubtracao);
console.log("Divisão: ",resultadoDivisao);
console.log("Multiplicação: ",resultadoMultiplicacao);
