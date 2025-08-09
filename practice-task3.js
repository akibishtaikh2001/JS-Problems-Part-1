const vowel = 'aeiouAEIOU';

function countVowel(str){
    let count = 0;
    for(const num of str){
        if(vowel.includes(num)){
            count++;
        }
    }
    return count;
}

const name = 'Khondaker Akib Ishtiakh ovi';
const count = countVowel(name);
console.log(count);
