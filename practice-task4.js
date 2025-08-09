function findTheLongestWord(str){
    const words = str.split(" "); // Split in to the word
    let longestWord = '';

    for(const word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;

}

const longestWorld = 'I am learning Programming to become a programmer';

const result = findTheLongestWord(longestWorld);

console.log(result);
