countHouse = (houses) => houses.slice(0, houses.indexOf(0)).reduce((total, house) => total + house, 0)

console.log(countHouse ([5, 1, 2, 3, 0, 1, 5, 0, 2]))