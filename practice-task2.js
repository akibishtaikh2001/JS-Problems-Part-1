
const numbers = [5,6,11,12,98, 5, 5, 15, 15, 5];

function findNumber(numbers, find){
    let count = 0;
    for(const number of numbers){
        if(number === find){
            count++;
        }
        
    }
    return count;
}

const find = findNumber(numbers, 5);
console.log(find);
const find2 = findNumber(numbers, 15);
console.log(find2);
const find3 = findNumber(numbers, 25);
console.log(find3);
