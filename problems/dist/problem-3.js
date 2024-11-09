"use strict";
{
    function countWordOccurrences(sentence, word) {
        let count = 0;
        let splitWords = sentence.split(' ');
        for (let w of splitWords) {
            if (w.toLowerCase() === word.toLowerCase()) {
                count++;
            }
        }
        return count;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
}
