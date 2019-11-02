function narcissisticNumber(number) {
    let numberArg = number, x, arrayDigit = [], sum = 0;
    while (number > 0) {
        x = number % 10;
        number = Math.floor(number/10);
        arrayDigit.push(x);
    }
    for (i in arrayDigit) {
        sum = sum + arrayDigit[i] ** arrayDigit.length
    }
    return (sum === numberArg) ? true : false
}
console.log(narcissisticNumber(153))
console.log(narcissisticNumber(1634))