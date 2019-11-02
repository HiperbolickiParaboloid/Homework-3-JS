function upperLower (sampleString) {
    let upper = 0, lower = 0, totalChars;
    for (char in sampleString) {
        if (sampleString[char].charCodeAt() >= 97 && sampleString[char].charCodeAt() <= 122) {
            lower = lower + 1;
        }
        else if (sampleString[char].charCodeAt() >= 65 && sampleString[char].charCodeAt() <= 90) {
            upper = upper + 1;
        }
    }
    totalChars = upper + lower;
    return "Total alphabetic upper chars: " + upper + "\n" + "Total alphabetic lower chars: " + lower + "\n" + "Total alphabetic chars: " + totalChars
}
console.log(upperLower("Hi Mr. Rober. How are you today?"))