function buySell (sampleString) {
    let Buy = 0, Sell = 0;
    for (sample of sampleString.split(",")){
        sample.split(" ")[3] === "B" ? Buy = Buy + sample.split(" ")[1] * sample.split(" ")[2] : Sell = Sell + sample.split(" ")[1] * sample.split(" ")[2]
    }
    return "Buy:" + Buy + " " + "Sell:"  + Sell
}

console.log(buySell("GOOG 300 542.0 B"))
console.log(buySell("ZNG 1300 2.66 B,NY 50 56.32 B,OWW 1000 11.623 B,OGG 20 580.1 B"))