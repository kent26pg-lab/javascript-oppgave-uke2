//  Oppgave 1
const checkOddOrEven = (num) => {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd"
    }
}

console.log(checkOddOrEven(1));
console.log(checkOddOrEven(5));
console.log(checkOddOrEven(10));
console.log(checkOddOrEven(17));
console.log(checkOddOrEven(18));

// Oppgave 2

function exString1(text) {
    return text.toUpperCase() + "!"; 
} 
console.log(exString1("hello"))
console.log(exString1("hope you are doing fine"))

const exString2 = (text) => text.toUpperCase() + "!";
console.log(exString2("this is a test for arrow function"));