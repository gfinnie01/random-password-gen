

function randomLowerCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUppperCase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSymbol() {
    const symbols = '!@#$%^&*(){}[]-=<>,./'
    return symbols [Math.floor(math.random()*symbols.length)]; 
}


const randomFunc = {
    nocase: randomLowerCase,
    case: randomUppperCase,
    Number: randomNumber,
    Symbol: randomSymbol
};

generateBtn.addEventListener("click", writePassword);
    const length = +8-128;
