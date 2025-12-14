/* Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

    Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
Ваша задача — создать функцию, которая принимает в качестве аргумента любое неотрицательное целое число и возвращает его вместе с цифрами в порядке убывания. По сути, нужно переставить цифры, чтобы получить максимально возможное число.

*/

function descendingOrder(n) {
    let massive = [];
    massive.push(n);
    let res = massive.toString().split('');
    let newRes = res.map(Number);
    newRes.sort((a, b) => b - a);
    let result = '';
    for (let i = 0; i < newRes.length; i++) {
        result += newRes[i]
    }
    return Number(result);
}
console.log(descendingOrder(0));
