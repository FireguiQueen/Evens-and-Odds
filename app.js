const numeros = [10, 5, 20, 21, 22, 24, 25]; 
const impares = [];
const pares = [];

function parImpar(){
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i]);
        } else {
            impares.push(numeros[i]);
        }
    }

    function formatArray(parImpar){
        return parImpar.sort().toString().replaceAll(',', ', ')
    }

    return `
        Ímpares = ${formatArray(impares)}
        Pares = ${formatArray(pares)}
    `
}

console.log(parImpar());

