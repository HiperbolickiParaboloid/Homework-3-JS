function split_array(array, number) {
    let new_array = [];
    let i, j, k;
    for (j in array) {
        for (i = 0; i < number; i++) {
            k = parseInt(i) + parseInt(j)
            new_array.push(array[k]);
        };
    };
    let new_clean_array = [];
    for (i in new_array) {
        if (new_array[i] !== undefined) {
            new_clean_array.push(new_array[i]);
        }
        else {
            break;
        }
    }
    let newest_array = [];
    for (j = 0; j < new_array.length - number; j = j + number) {
        let small_array = [];
        if (new_clean_array[j+number] === undefined) {
            break;
        }
        for (i = 0; i < number; i++) {
            k = parseInt(i) + parseInt(j);
            small_array.push(new_clean_array[k]);
        }
        newest_array.push(small_array);
    };
    return newest_array
}

console.log(split_array([1,2,3,4,5,6,7,8],5))