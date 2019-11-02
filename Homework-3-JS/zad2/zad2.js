function insertIndex (array, element) {
    for (i in array.sort(function(a, b){return a-b})) {
        if (element >= array[i]) {
            array.splice(array[i], 0, element);
            break;
        }
    }
    return array.indexOf(element);
}
console.log(insertIndex([20,2,3],19))
console.log(insertIndex([1,2,3,4],1.5))