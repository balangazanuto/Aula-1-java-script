// Calcular Soma
function calcularSoma() {
    var soma = 5 + 10;  // Soma de números
    mostrarResultado('resultadoSoma', `Soma: ${soma}`);  // Saída: 15
}

// Calcular Subtração
function calcularSubtracao() {
    var subtracao = 10 - 5;  // Subtração de números
    mostrarResultado('resultadoSubtracao', `Subtração: ${subtracao}`);  // Saída: 5
}

// Calcular Divisão
function calcularDivisao() {
    var divisao = 10 / 2;  // Divisão de números
    mostrarResultado('resultadoDivisao', `Divisão: ${divisao}`);  // Saída: 5
}

// Calcular Resto
//function calcularResto() {
   // var resto = 10 % 3;  // Resto de uma divisão
   // mostrarResultado('resultadoResto', `Resto: ${resto}`);
//}
// impar ou Par
var num = 20;
var resto = num % 2;

console.log("O número é: " + resto);

function calcularResto() {
    if (num % 2 === 0) {
       alert ("O numero" + resto + "par");
    } else {
           alert ("O número" + resto + "é impar");
        }
    }
  // Saída: 1


// Calcular Multiplicação
function calcularMultiplicacao() {
    var multiplicacao = 5 * 2;  // Multiplicação de números
    mostrarResultado('resultadoMultiplicacao', `Multiplicação: ${multiplicacao}`);  // Saída: 10
}

// Comparar Números
function compararNumeros() {
    var numero1 = 10;
    var numero2 = 15;
    var comparacoes = `
        numero1 == numero2: ${numero1 == numero2} <br>
        numero1 != numero2: ${numero1 != numero2} <br>
        numero1 > numero2: ${numero1 > numero2} <br>
        numero1 < numero2: ${numero1 < numero2} <br>
        numero1 >= numero2: ${numero1 >= numero2} <br>
        numero1 <= numero2: ${numero1 <= numero2}
    `;
    mostrarResultado('resultadoComparacao', comparacoes);
}

// Incrementar Contador
function incrementarContador() {
    var contador = 0;
    contador++; // Incrementa em 1
    contador += 5; // Adiciona 5
    mostrarResultado('resultadoContador', `O valor final é: ${contador}`); // Saída: 6
}

// Decrementar Número
function decrementarNumero() {
    var numero = 10; // Exemplo de número
    var diminuirNumero = numero--; // Decrementa
    mostrarResultado('resultadoDecremento', `Número após decremento: ${diminuirNumero}`); // Saída: 10
}
//Nível Intermediário
// Função para mostrar resultados em um elemento HTML
function mostrarResultado(elementoId, mensagem) {
    document.getElementById(elementoId).innerText = mensagem;
}

// Calcular a média de três notas e verificar aprovação
function calcularMedia() {
    const notas = [7, 8, 6]; // Exemplo de notas
    const media = (notas[0] + notas[1] + notas[2]) / 3;
    const resultado = media >= 7 ? "Aprovado" : "Reprovado";
    mostrarResultado('resultadoAprovacao', resultado);
}

// Converter Celsius para Fahrenheit
function converterTemperatura() {
    const celsius = 25; // Exemplo de temperatura em Celsius
    const fahrenheit = (celsius * 9 / 5) + 32;
    mostrarResultado('resultadoTemperatura', `Temperatura em Fahrenheit: ${fahrenheit}`);
}

// Aplicar desconto condicional
function aplicarDesconto() {
    const valorCompra = 120; // Exemplo de valor da compra
    const valorFinal = valorCompra > 100 ? valorCompra * 0.9 : valorCompra;
    mostrarResultado('resultadoCompra', `Valor final da compra: R$${valorFinal.toFixed(2)}`);
}

// Verificar se um número é múltiplo de 3 e 5
function verificarMultiplos() {
    const numero = 15; // Exemplo de número
    const resultado = (numero % 3 === 0 && numero % 5 === 0) ? "É múltiplo de 3 e 5" : "Não é múltiplo de 3 e 5";
    mostrarResultado('resultadoMultiplo', resultado);
}

// Verificar se um número está dentro de um intervalo
function verificarIntervalo() {
    const numero = 30; // Exemplo de número
    const resultado = (numero >= 10 && numero <= 50) ? "Está dentro do intervalo" : "Não está dentro do intervalo";
    mostrarResultado('resultadoIntervalo', resultado);
}

// Verificar se um ano é bissexto
function verificarAnoBissexto() {
    const ano = 2024; // Exemplo de ano
    const resultado = ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) ? "É bissexto" : "Não é bissexto";
    mostrarResultado('resultadoBissexto', resultado);
}

// Exemplo de uso da função de calculadora
function calcular() {
    const num1 = 10; // Exemplo de número 1
    const num2 = 5;  // Exemplo de número 2
    const operador = '+'; // Exemplo de operador
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operador inválido";
    }

    mostrarResultado('resultadoCalculadora', `Resultado: ${resultado}`);
}

// Exemplo de validação de senha
function validarSenha() {
    const senha = "Senha123"; // Exemplo de senha
    const valida = senha.length >= 8 && /[A-Z]/.test(senha) && /\d/.test(senha);
    mostrarResultado('resultadoSenha', valida ? "Senha válida" : "Senha inválida");
}

// Exemplo de tipo de triângulo
function tipoTriangulo() {
    const lado1 = 5, lado2 = 5, lado3 = 8; // Exemplo de lados
    let tipo;

    if (lado1 === lado2 && lado2 === lado3) {
        tipo = "Equilátero";
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipo = "Isósceles";
    } else {
        tipo = "Escaleno";
    }

    mostrarResultado('resultadoTriangulo', tipo);
}

// Exemplo de cálculo do IMC
function calcularIMC() {
    const peso = 70; // Exemplo de peso
    const altura = 1.75; // Exemplo de altura
    const imc = peso / (altura * altura);
    let classificacao;

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    }
}
