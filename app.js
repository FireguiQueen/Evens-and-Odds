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



