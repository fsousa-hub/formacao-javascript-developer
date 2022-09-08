// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

//Entrada
const precoCombustivel = 5.80;
const kmPorLitros = 13;
const distanciaEmKm = 150;

//Saida
const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

//Exibe no console
console.log(valorGasto.toFixed(2));