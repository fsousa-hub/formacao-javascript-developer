// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

//Entrada
const precoEtanol = 5.99;
const precoGasolina = 7.78;
const kmPorLitros = 12;
const distanciaEmKm = 130;
const tipoCombustivel = 'Gasolina';

//Saida
const litrosConsumidos = distanciaEmKm / kmPorLitros;

//Testa condição tipo combustivel: "Gasolina" ou "Etanol"
//Exibe o valor gasto na viagem
if (tipoCombustivel === 'Etanol'){
    //Saida
    const valorGasto = litrosConsumidos * precoEtanol;
    // Exibe valor gasto utilizando o Etanol
    console.log(valorGasto.toFixed(2));
}else {
    //Saida
    const valorGasto = litrosConsumidos * precoGasolina;
    // Exibe valor gasto utilizando a Gasolina
    console.log(valorGasto.toFixed(2));
}




