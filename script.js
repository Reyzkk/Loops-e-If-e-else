/*Faça um programa que leia 4 números digitados pelo usuário e exiba a soma e a média desses valores. Mostre ao usuário o resultado.
Altere o programa anterior, de tal maneira que o usuário informe a quantidade de números que serão digitados (ou seja, o valor “4” não deve ser fixo no programa).*/


let i = 1;
let num = "";
let quantidade = prompt('digite a quantidade')
let soma = 0;



while (i <= quantidade) {

    num = Number(prompt('digite o numero'))
    soma += num;
    i++

}
let media = soma / quantidade;
alert("A soma é igual a: " + soma + ", e a media è " + media);



/*Faça um programa que solicite ao usuário dois números inteiros diferentes “num1” e “num2” e calcule a soma de todos os números ímpares dentro do intervalo definido por [num1, … , num2]. Considere que num1 é sempre menor do que num2. Mostre ao usuário o resultado.*/



let num1 = Number(prompt('digite o primeiro numero'));
let num2 = Number(prompt('Digite o segundo numero'));
let total = 0;

if (num1 % 2 != 0 && num2 % 2 != 0 && num1 != num2) {

    for (let indice = num1; indice <= num2; indice++) {

        if (indice % 2 != 0) 
            total += indice;
    }
    alert("O resultado da soma dos valores impares e igual a : " + total)
} else {
    alert('Digite o primeiro numero menor , e o segundo maior ex(1, 3) obs: o numero tem que ser impar')
}








