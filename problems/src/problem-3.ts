{
    function countWordOccurrences(sentence:string, word:string):number{
        let count:number = 0;
        let splitWords: string[] = sentence.split(' ');
        for(let w of splitWords)
        {
            if(w.toLowerCase()===word.toLowerCase()){
                count++;
            }
        }
        return count;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
}