/**
 * function takes an array as parameter
 * give me the avarage to the odd numbers in the array
 */

/**
 *  1. put odd number in array
 */

function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 !== 0) {
            // console.log(number)   
            odds.push(number);

        }

    }
    // odds is the array that contains inly the odd numbers
    // console.log(odds);
    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;





}

const numbers = [42, 13, 58, 65, 81, 96, 7, ];
const avg = oddAverage(numbers);
console.log('avarage of the odd number is:', avg);
