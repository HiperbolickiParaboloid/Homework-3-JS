stringEndsWith = (string, endstring) => (string.length === endstring.length + string.lastIndexOf(endstring)) ? string + " se zavrsava sa " + endstring : string + " se ne zavrsava sa " + endstring
console.log(stringEndsWith("milisave","save"))