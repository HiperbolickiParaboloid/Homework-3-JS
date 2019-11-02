function getWordsEndsWithLetter(sampleString, char) {
    let sentenceArray = sampleString.split(".");
    let position = -1;
    let finalArray = [];
    for (sentence in sentenceArray) {
        let counter = 0, arrayOfWords = [];
        wordArray = sentenceArray[sentence].split(" ");
        for (word in wordArray) {
            if (wordArray[word].endsWith(char)) {
                endsWith = {"word": wordArray[word], "position": sentenceArray[sentence].indexOf(wordArray[word]) + wordArray[word].length + position}
                counter = counter + 1;
                arrayOfWords.push(endsWith);
            }
        }
        let counterSentence = {"num_of_words": counter};
        arrayOfWords.push(counterSentence);
        position = position + sentenceArray[sentence].length;
        finalArray.push(arrayOfWords);
    }
    finalArray.pop();
    return finalArray;
}

console.log(getWordsEndsWithLetter("Print only the words that end with the chosen letter in those sentences. Ex ample can contains one or more sentences.", "s"))