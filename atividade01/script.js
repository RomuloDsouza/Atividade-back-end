//Tipos de dados 

// let meuNome= 'Romulo'
// console.log(meuNome);

// meuNome=true;
// console.log(meuNome)

// int string boolean object 


//Array 
// let frutas=["maçã", "banana"]
// let Aluno= ["Romulo",28 , true]

// console.log(typeof Aluno)

//Atividade01

//1) Crie um programa que exiba no console uma mensagem digitada pelo usuário.

// let mensagem = prompt('Digite uma mensagem  ')

//  console.log(mensagem);

//------------------------------------

 //2) Crie um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela.

// let nome = "Romulo"
// let sobrenome="Valente"

// alert(`Ola seja bem vindo ${nome} ${sobrenome}`)

//------------------------------------

// 3) Crie um programa que leia os dados de um aluno: matrícula,
// nome, sobrenome, CPF, sexo, data de nascimento, endereço
// e telefone e exiba no console.

// let cadastroAluno ={
//     "nome":"Romulo" ,
//     "sobrenome":"Valente" ,
//     "cpf":"99999999" ,
//     "sexo":"M" ,
//     "dataNasc":"25/02/1996",
//     "endereço":{'rua': 'tal tal' ,
//                 'numero': 50
//                 } ,
//     "telefone":99999999         
            
// }
// console.log(cadastroAluno)

//------------------------------------

// 4) Crie um programa que leia uma disciplina, um aluno e as
// quatro notas desse aluno naquela disciplina. Ao final, mostre
// na tela a média do aluno na disciplina.

    // let n1= 50;
    // let n2= 59;
    // let n3= 90;
    // let n4= 5;

    // media= (n1+n2+n3+n4) / 4 ;

    // console.log(`A media do e aluno e ${media }`)

    //------------------------------------
    // 5) Crie um programa que exiba na tela a tabuada do número
    // digitado pelo usuário.

    // let numeroTab = parseInt( prompt("Digite o numero "))

    // for(let i=1; i<=10; i++){
    //   let soma= numeroTab+i
    //     console.log(`A tabuada de ${numeroTab} + ${i} = ${soma} `)
    // }
         //------------------------------------
//     6) Crie um programa que leia o nome e o salário de um
// funcionário, mostrando no final uma mensagem.

// let nomeFuncionario = prompt("Digite o nome do funcionário:");
// let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));

// console.log(`Funcionário: ${nomeFuncionario} o salario e ${salarioFuncionario.toFixed(2)}`);

 //------------------------------------

//  7) Crie um programa que leia 5 números e mostre o somatório
// entre eles.

// let n1= 96;
// let n2= 5;
// let n3= 9;
// let n4= 58;
// let n5= 9;

// soma= n1+n2+n3+n4+n5;

// console.log(`A soma e ${soma}`)

//------------------------------------

// 8) Crie um programa que leia a idade de uma pessoa expressa
// em anos, meses e dias e mostre-a expressa apenas em dias.

// let ano= 20;
// let meses= 8;
// let dias= 89;

// let diasVida= ( ano * 365.25 ) +( meses*30 ) +dias
// console.log(`O tatal de dias vivido são  ${diasVida} dias`)
//------------------------------------

// 9) Crie um programa que leia a idade de uma pessoa expressa
// em dias e mostre-a expressa em anos, meses e dias.

// let diasVida = 900;
// let anos = Math.floor(diasVida / 365);
// let meses = Math.floor((diasVida % 365) / 30);
// let dias = diasVida % 30;
// console.log(`Idade: ${anos} anos, ${meses} meses e ${dias} dias.`);



// 10) Crie um programa que leia o tempo de duração de uma
// atividade em horas, minutos e segundos e mostre-o expresso
// em segundos.

// let Math.floor(10);
// let Math.floor(50);
// let Math.floor(30);

// let segundosCaculada = (horas*3600) + (50*60) + segundos

// console.log(`Os segundo gasto na atividade são ${segundosCaculada}`)

//------------------------------------

// 11) Crie um programa que leia o tempo de duração de uma
// atividade em segundos e mostre-o expresso em horas,
// minutos e segundos. 

// let tempoEmSegundos =60000;
// let horas = Math.floor(tempoEmSegundos / 3600);
// let minutos = Math.floor((tempoEmSegundos % 3600) / 60);
// let segundos = tempoEmSegundos % 60;

// console.log(`Tempo de duração: ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);0

//------------------------------------

// 12 Crie um programa que leia o preço de um produto, calcule e
// mostre o seu preço promocional, com 15% de desconto.

//let produto= parseFloat(prompt('Digite o valor do produto'))

// let prodPromo= (produto/100) *85 ;
// let total= prodPromo.toFixed(2);

// console.log(`O valor do produto com 15% de desconto sai a R$ ${total}`)

//------------------------------------

// 13) Crie um programa que leia o salário de um funcionário,
// calcule e mostre o seu novo salário, com 27,50% de aumento.

// let salario= parseFloat(prompt('Digite seu salário '))

// let salarioTotal= salario *1.275 ;
// let total= salarioTotal.toFixed(2);

// console.log(`O salario teve um aumento de 27,5% Agora e ${total}`)

//------------------------------------

// 14) Crie um programa que leia o valor da matrícula de um curso,
// calcule e mostre o seu novo valor, com 20% de desconto.

// let matricula= parseFloat(prompt('Digite o valor da matrícula'))

// let valorDesconto= (matricula/100) *80 ;
// let total= valorDesconto.toFixed(2);

// console.log(`O valor da matrícula com 20% de desconto sai a R$ ${total}`)

//------------------------------------

// 15) Crie um programa que leia o valor de um boleto que será
// pago com atraso, a quantidade de dias em atraso, calcule e
// mostre o seu novo valor com uma taxa de 1,25% ao dia.

let valorBoleto= parseFloat(prompt("Digite o valor do boleto"))

let diasVencidos= parseFloat(prompt("Digite os dias vencidos")) 

let total =((valorBoleto*0.0125) * diasVencidos) ;
    let totalSoma =total+valorBoleto
    console.log(`O valor atualizado e  R$ ${totalSoma}`)
