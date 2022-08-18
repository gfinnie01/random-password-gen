// generator functions - 

function getRandomLow() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(getRandomLow());