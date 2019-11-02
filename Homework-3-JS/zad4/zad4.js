function randomize(n) {
    let numberArray = [], finalArray = [], smallArray = [];
    for (i = 1; i <= n; i++) {
        numberArray.push(i)
    }
    while (numberArray.length > 0) {
        if (smallArray.length === 2) {
            finalArray.push(smallArray);
            smallArray = [];
        }
        let item = numberArray[Math.floor(Math.random()*numberArray.length)];
        smallArray.push(item);
        numberArray.splice(numberArray.indexOf(item), 1)
    }
    finalArray.push(smallArray)
    return finalArray
}
console.log(randomize(10))