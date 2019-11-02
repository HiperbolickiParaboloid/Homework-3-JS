function checkPassword (inputString, minLength, flagUpper = false, flagLower = false, flagDigit = false) {
    if (inputString.length < minLength) {
        return "Password is to short."
    }
    if (flagUpper === true) {
        let flag = 0;
        for (i in inputString) {
            if (inputString[i].charCodeAt() >= 65 && inputString[i].charCodeAt() <= 90) {
                flag++
            }
        }
        if (flag === 0) {
            return "Password must contain upper characters."
        }
    }
    if (flagLower === true) {
        let flag = 0;
        for (i in inputString) {
            if (inputString[i].charCodeAt() >= 97 && inputString[i].charCodeAt() <= 122) {
                flag++
            }
        }
        if (flag === 0) {
            return "Password must contain lower characters."
        }
    }
    if (flagDigit === true) {
        let flag = 0;
        for (i in inputString) {
            if (inputString[i].charCodeAt() >= 48 && inputString[i].charCodeAt() <= 57) {
                flag++
            }
        }
        if (flag === 0) {
            return "Password must contain digits."
        }
    }
    return "Your password is correct."
}

console.log(checkPassword("SODAVODAsodavoda12", 6, true, true, true))