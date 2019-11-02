function hangman () {
    let count = 7;
    changeChar = (char) => char = "*";
    getRandomIndex = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;
    let wordsArray = ["robot", "mouse", "mountain", "rocket", "skateboard", "water", "hamburger"];
    let word = wordsArray[getRandomIndex(0, wordsArray.length - 1)];
    let starsWord = word.split("").map(changeChar);
    let arrayWord = word.split("");
    console.log(starsWord, "You have " + count + " more attempts.");
    while (count > 0) {
        if (starsWord.indexOf("*") < 0) {
            console.log ("Congratulations, you have found the word.");
            break;
        }
        let letter = prompt("Please enter your letter: ", "");
        if (arrayWord.indexOf(letter) < 0) {
            count--;
            console.log(starsWord, "You have " + count + " more attempts.");
        }
        while (arrayWord.indexOf(letter) >= 0) {
            starsWord[arrayWord.indexOf(letter)] = letter;
            arrayWord[arrayWord.indexOf(letter)] = "*";
            console.log(starsWord, "You have " + count + " more attempts.");
        }

    }
}

hangman()