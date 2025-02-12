// Função de multiplicação
function multiplicar(num1: number, num2: number): number {
    return num1 * num2;
}
// Função de saudação
function saudar(nome: string): string {
    return "Olá " + nome;
}
// Exemplos de uso
const resultadoMultiplicacao = multiplicar(5, 10);
console.log("Resultado da multiplicação: " + resultadoMultiplicacao); // Saída: Resultado da multiplicação: 50
const mensagemSaudacao = saudar("Maria");
console.log(mensagemSaudacao); // Saída: Olá Maria