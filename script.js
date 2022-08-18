


// generateBtn.addEventListener("click", () =>{
//     const length = +lengthBtn.value;
//     const hasNoCase = lowercaseBtn.true;
//     const hasUpperCase = uppercaseBtn.true;
//     const hasNumber = numbersBtn.true;
//     const hasSymbol = symbolsBtn.true;

//     console.log(hasNoCase, hasNumber, hasSymbol, hasUpperCase);
// });




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

// var symbols = "!@#$%^&*()_+,.<>/?";
// Math.floor(Math.random() * symbols.length);




