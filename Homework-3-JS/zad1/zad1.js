function remove_falsy(array) {
    let falsy_array = [false, 0, "", null, undefined];
    let new_array = [];
    for (i in array) {
        if (Number.isNaN(array[i]) === true) {
            delete array[i];
        };
    }
    for (i in array){
        for (j in falsy_array) {
            if (falsy_array[j] === array[i]) {
                delete array[i];
            };
        };
    };
    for (i in array) {
        new_array.push(array[i]);
    };
    return new_array;
};

console.log(remove_falsy([0, NaN, 7, null, 1, 'Mirko']))