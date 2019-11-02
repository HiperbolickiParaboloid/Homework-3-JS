function creditCard(number) {
    if (String(number).length !== 16) {
        return "Credit card is not valid. Check the number of digits!"
    }
    let cardArray = String(number).split("").map((digit) => Number(digit));
    for (i = cardArray.length - 2; i >= 0; i = i - 2) {
        cardArray[i] = cardArray[i] * 2;
        if (cardArray[i] > 9) {
            let smallArray = String(cardArray[i]).split("").map((digit) => Number(digit));
            cardArray[i] = smallArray[0] + smallArray [1];
        }
    }
    return (cardArray.reduce((a, b) => a + b, 0) % 10 === 0) ? "Credit card number is valid, please proceed." : "Credit card number is not valid!"
}

console.log(creditCard(123456))
console.log(creditCard(1891))