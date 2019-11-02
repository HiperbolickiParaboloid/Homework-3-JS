getDomain = (url) => url.split("/")[2].indexOf("www.") === -1 ? url.split("/")[2] : url.split("/")[2].slice(4, url.split("/")[2].length)

console.log(getDomain("https://docs.google.com/presentation/d/1meVj12N5wjhIQ-3pPlqCWno8Wf4Zkyod5LpFYT2jmRU/edit#slide=id.g633eea23b7_0_61"))
console.log(getDomain("https://www.youtube.com/watch?v=DJVg1xa80bA"))
console.log(getDomain("https://www.facebook.com"))