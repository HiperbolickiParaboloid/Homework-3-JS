function getDigit(sampleString) {
    stringOfDigits = "";
    for (char in sampleString) {
        if (sampleString[char].charCodeAt() >= 48 && sampleString[char].charCodeAt() <= 57) {
            stringOfDigits = stringOfDigits + sampleString[char];
        }
    }
    return (Number(stringOfDigits));
}
console.log(getDigit("Hi Mr. Rober53. How are you today? Today is 08.10.2019"))