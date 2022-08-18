// generator functions - 

function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(getRandomLow());