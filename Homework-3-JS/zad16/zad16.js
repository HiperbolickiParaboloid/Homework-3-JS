function doors(n) {
    let doors = [], students = [], count = 0;
    for (i=1; i <= n; i++) {
        let one_door = [i, false];
        doors.push(one_door);
        students.push(i)
    }
    for (i in students) {
        for (j in doors) {
            if (doors[j][0] % students[i] === 1) {
                doors[j][1] = ! doors[j][1]
            }
        }
    }
    for (i in doors) {
        if (doors[i][1] === true) {
            count = count + 1;
        }
    }
    return count
}

console.log(doors(8))