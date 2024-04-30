const PromptSync = require("prompt-sync");

const prompt = require("prompt-sync")();

//Atividade 01
// for(let i=0; i<=50;i++){
//     let teste = i%2

//     if(i == 30){
//         break;
//     }else if(teste==1){
//         console.log(i)
//     }

// }

//Atividade 02

// for(let i=0; i<=50;i++){
//     let teste = i%2

//     if(i == 30){
//         continue;
//     }else if(teste==0){
//         console.log(i)
//     }

// }

//Atividade 03

// let numero= parseInt(prompt('Digite um valor')) ;

// let nTotal= numero%2;

// if(nTotal ==0 ){
//     console.log(O número ${numero} é par.);
// } else {
//     console.log(O número ${numero} é ímpar.);
// }

//Atividade 04

// let numero = parseInt(prompt("Digite um valor: "));
// let a = numero;
// let mult = 1;

// if (numero == 0) {
// console.log(`O resultado de ${a}! é 1`);
// } else {
//   for (numero; numero >= 1; numero--) {
//     mult = numero * mult;
//   }
//   console.log(`O resultado de ${a}! é ${mult}`);
// }

//Atividade 05

//  let soma = 0;

// for(i=1;i<=100;i++){

//     if(i %2 !==0 && i% 3===0 ){
//        soma+=i;
        
//     }
// }
// console.log(soma)


// 6) Crie um programa que leia os valores A, B, C e exiba no
// console os números ordenados em ordem crescente e
// depois em ordem decrescente.

// function main(){
// const a = parseInt(prompt("Digite um numero: "))
// const b = parseInt(prompt("Digite um numero: "))
// const c = parseInt(prompt("Digite um numero: "))

// let maior,menor,meio;


// if(a>b && a >c){
//   maior =a ;
//   if(b<a && b<c){
//     menor=b
//     meio=c
//   }else{
//     meio=b
//     menor=c
//   }

// }else if(a<b && a<c){
//    menor=a
//    if(b>a && b>c){
//     maior=b
//     meio=c
//   }else{
//     meio=b
//     maior=c

//   }

// }else{
//    meio =a
//    if(b<a && b<c){
//     menor=b
//     maior=c
//   }else{
//     maior=c
//     maior=b

//   }
// }

// console.log(`O maior numero e  ${maior} o numero do meio e ${meio} e o menor numero e ${menor} `)

// console.log(`O menor  numero e  ${menor} o numero do meio e ${meio} e o maior numero e ${maior} `)
// }

// main()

// 7) Crie um programa que leia dois valores inteiros A e B se os
// valores forem iguais deverá se somar os dois, caso contrário
// multiplique A por B. Ao final de qualquer um dos cálculos
// deve-se atribuir o resultado para uma variável C e mostrar
// seu conteúdo no console.

// let valorA=parseInt(prompt("Digite o primeiro valor "))

// let valorB=parseInt(prompt("Digite o segundo valor "))

// let valorC;


// if(valorA ===valorB){
//   valorC = valorA+valorB;
//   console.log(`Os valores são iquais entao a soma e ${valorC}`)
// }else{
//   valorC = valorA*valorB;
//   console.log(`Os valores são diferentes  entao a multiplicação  e ${valorC}`)
// }

// 8) Crie um programa que leia os dados de um aluno: nome,
// matrícula, disciplina, nota. Se a nota do aluno for maior ou
// igual a 60 exiba no console “Aprovado”, se a nota do aluno
// for menor que 60 porém maior ou igual a 50 exiba no
// console “Em recuperação” e se a nota do aluno for menor
// que 50 exiba no console “Reprovado”.

  // let nomeAluno= prompt('Digite seu nome ')
  // let matricula= parseInt(prompt('Digite sua matricula '))
  // let notaALuno= prompt('Digite sua nota ')

  // if(notaALuno >=60){
  //   console.log(`Ola ${nomeAluno} da matricula ${matricula} voce esta aprovado`)

  // }else if(notaALuno>=50 && notaALuno<59){
  //   console.log(`Ola ${nomeAluno} da matricula ${matricula} voce esta esta em recuperação `)
  // }else{
  //   console.log(`Ola ${nomeAluno} da matricula ${matricula} voce esta Reprovado`)
  // }
  // 9) Crie um programa que leia a idade de 10 pessoas, exibindo
  // ao final do programa:
  // - Qual é a média de idade do grupo
  // - Quantas pessoas tem mais de 20 anos
  // - Quantas pessoas tem menos de 10 anos
  // - Qual foi a maior idade lida
  // - Qual foi a menor idade lida


  // 10) Faça um programa que leia a largura e o comprimento de um terreno
  // retangular, calculando e mostrando a sua área em m2 (largura x
  // comprimento). O programa também deve mostrar a classificação desse
  // terreno, de acordo com a lista abaixo:
  // - Abaixo de 100m2 = TERRENO POPULAR
  // - Entre 100m2 e 500m2 = TERRENO MASTER
  // - Acima de 500m2 = TERRENO VIP

//   let largura = parseInt(prompt("Digite a largura "));

//   let comprimento = parseInt(prompt("Digite a comprimento "));

//   let total= largura*comprimento;

// if(total>=500){
//   console.log('TERRENO VIP')

// }else if(total >=100 && total<=499){
//   console.log('TERRENO MASTER')
// }else{
//   console.log('TERRENO POPULAR')
// }

// let valor = parseFloat(prompt("Digite o valor do pagamento "))


// console.log("1  À vista em dinheiro ou cheque, recebe 10% de desconto 2  À vista no cartão de crédito, recebe 15% de desconto 3  Em duas vezes, preço normal de etiqueta sem juros 4  Em duas vezes, preço normal de etiqueta mais juros de 10"


// )

// let pagamento = parseInt(prompt("Digite a condiçao 1, 2, 3,ou 4 "))


// switch (pagamento) {
//   case 1:
//       let avista=valor*0.90;
//       console.log(`O total de sua compra eR$ ${avista.toFixed(2)}`);
//     break;

//     case 2:
//       let cartao=valor*0.85;
//       console.log(`O total de sua compra e R$ ${cartao.toFixed(2)}`)
//     break;  

//     case 3:
//       let cartaoDuas=valor;
//       console.log(`O total de sua compra e R$ ${cartaoDuas.toFixed()}`)
//     break; 
  
//     case 4:
//       let cartaoMaisVezes=(valor*1.10);
//       console.log(`O total de sua compra e R$ ${ cartaoMaisVezes.toFixed(2) }`)
//     break; 

//   default:
//     console.log('Digite uma das quadro alternativas')
//     break;
// }

// 12) Tendo como dados de entrada a altura e o sexo de uma pessoa, crie um
// programa que calcule seu peso ideal, utilizando as seguintes fórmulas:
// para homens: (72.7 * h) - 58; para mulheres: (62.1 * h) - 44.7.

//   let altura;
// do {
//   altura = parseFloat(prompt("Digite sua altura:"));
// } while (isNaN(altura)); 

// let sexo;

// do {
//   sexo = prompt("Digite seu genero M masculino F feminino ");
// } while ( sexo!=='f' && sexo!=='m'); 

// if(sexo==='f'){
//   let calculoF=(62.1 * altura) - 44.7;
//   console.log(`O seu pesso ideial e ${calculoF.toFixed(2)}`)

// }else if(sexo==='m'){
//   let calculoM=(72.7 * altura) - 58;
//   console.log(`O seu pesso ideial e ${calculoM.toFixed(2)}`)
// }

// 13) Tendo como dados de entrada dois valores numéricos digitados pelo
// usuário, crie um programa para uma calculadora com as seguintes
// operações: soma, subtração, multiplicação e divisão. Após a escolha da
// operação exiba no console o resultado.

//  let n1, n2;

// do {
//     n1=parseFloat(prompt("Digite o primeiro numero "))
//     n2=parseFloat(prompt("Digite o segundo numero "))
// } while (isNaN(n1 || n2));

// function soma(x,y){
//      somaN =n1+n2; 
//     console.log( ` A soma dos numero e: ${somaN.toFixed(2)}`)
//   }

//   function subtracao(x,y){
//     subN =n1-n2; 
//     console.log( ` A subtrçao  dos numero e: ${subN.toFixed(2)}`)
//   }

//   function multiplicaçao(x,y){
//     mult =n1*n2; 
//     console.log( ` A multiplicação  dos numero e: ${mult.toFixed(2)}`)
//   }

//   function divicao(x,y){
//     divi =n1*n2; 
//     console.log( ` A divição  dos numero e: ${divi.toFixed(2)}`)
//   }

//   console.log("Digite 1 para soma, 2 para subtração, 3 multiplicaçao, 4 divisão")
//     let condicao=parseFloat(prompt('Digite a opçao 1, 2, 3, ou 4: ' ))

//   switch (condicao) {
//     case 1:
//         soma(n1,n2)
//       break;

//       case 2:
//         subtracao(n1,n2)
//       break;

//       case 3:
//         multiplicaçao(n1,n2)
//       break;

//       case 4:
//         divicao(n1,n2)
//       break;

//     default:
//       console.log('opção inválida ')
//       break;
//   }

// 14) Tendo como dados de entrada o peso (em quilogramas) e a altura (em
//   metros) de uma pessoa, crie um programa que calcule o Índice de
//   Massa Corporal (IMC) dessa pessoa.
//   Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
//   Classifique o IMC da seguinte forma:
//   - IMC < 18,5 Kg/m2: Abaixo do Peso
//   - IMC >= 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal
//   - IMC >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso
//   - IMC >= 30 Kg/m2: Obesidade

//   let kg,al;

//   do {
//       kg=parseFloat(prompt("Qunatos kilos voce tem "));
//       al=parseFloat(prompt("Qual e a sua altura "));
//   } while (isNaN(kg && al));

//       imc=kg/(al*al);

//  if(imc>=30){
//       console.log(`IMC ${imc} >= 30 Kg/m2: Obesidade`);
//  }else if(imc>= 25 && imc<29.9){
//   console.log(`IMC ${imc} >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso`);
//  }else if(imc>=18.5 && imc<24.9){
//   console.log(` IMC ${imc.toFixed(2)} 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal`);
//  }else{
//   console.log(`IMC ${imc.toFixed(2)} >= 18,5 Kg/m2: Abaixo do Peso`);
//  }

// 15) Crie um programa para controlar os saques de um caixa eletrônico que
// deve possuir algum mecanismo para decidir o número de notas de cada
// valor que deve ser disponibilizado para o cliente que realizou o saque.
// – O caixa eletrônico trabalhará com notas de R$ 100,00, R$ 50,00, R$
// 20,00, R$ 10,00, R$ 5,00, R$ 2,00 e R$ 1,00. Não serão aceitos valores
// com casas decimais, caso o usuário informe uma valor com casa
// decimais o sistema deverá informar que o valor solicitado para o
// saque é inválido, e pedir que o usuário informe um novo valor.
// – Um possível critério seria o da "distribuição ótima" no sentido de
// que as notas de menor valor fossem distribuídas em número mínimo
// possível. Por exemplo, se a quantia solicitada fosse R$ 188,00, o
// programa deveria indicar uma nota de R$ 100,00, um nota de R$
// 50,00, uma nota de R$ 20,00, uma nota de R$ 10,00, uma nota de R$
// 5,00, um nota de R$ 2,00 e uma nota de R$ 1,00.
// – Com base nessas informações, crie um programa que receba o valor
// da quantia solicitada e retorne a distribuição das notas de acordo
// com o critério da distribuição ótima.



 







