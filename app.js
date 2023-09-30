function evenOdd(...numbers)
{
    const odd = [];
    const even = [];
    for (let i = 0; i < numbers.length; i++)
    {
        numbers[i] % 2 === 0? even.push(numbers[i]) : odd.push(numbers[i]);
    }

    function formatArray(evenOdd)
    {
        return evenOdd.sort().toString().replaceAll(',', ', ');
    }

    return `
    Odds = ${formatArray(odd)} | Evens = ${formatArray(even)}
    `
}

console.log(evenOdd(1, 2, 3, 4, 5));




/* 
OLD CODE. 
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
*/
