function getTagContent(html, tag) {
    trim = (string) => string.trim();
    indexOf = (string) => {
        let index = string.indexOf(">");
        console.log(index)
        return (index >= 0) ? string.slice(index + 1) : string;
    }
    length = (string) => string.slice(0, string.length - 2);
    emptyString = (string) => (string === "") ? false : true;

    let array = html.split(tag + ">");
    let arrayTrim = array.map(trim);
    let arrayIndexOf = arrayTrim.map(indexOf);
    let arrayLength = arrayIndexOf.map(length);
    let finalArray = arrayLength.filter(emptyString);
    return finalArray;
}

htmlString = '<h1 href = "https://www.w3schools.com"> <p>My first paragraph.</p> My First Heading </h1>'
hoptag = "h1"

console.log(getTagContent(htmlString, hoptag))