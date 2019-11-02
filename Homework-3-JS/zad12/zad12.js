function zeroesSequence (sampleArray) {
    let max = 0, zeroesArray = [], maxString = "", arrayString = "", returnArray = [];
    for (i = 0; i <= sampleArray.length; i++) {
        let j = 0, count = 0;
        while (sampleArray[i + j] === 0) {
            count = count + 1;
            j = j + 1;
        }
        if (count >= max) {
            max = count;
        }
    }
    for (i = 0; i < max; i++) {
        maxString = maxString + "0";
    }
    for (i in sampleArray) {
        arrayString = arrayString + String(sampleArray[i]);
    }
    returnArray[0] = max;
    returnArray[1] = arrayString.indexOf(maxString);
    returnArray[2] = arrayString.indexOf(maxString) + maxString.length - 1;
    return returnArray;
}

console.log(zeroesSequence([1, 0, 0, 0, 2, 0, 3, 0, 0, 0, 0]))