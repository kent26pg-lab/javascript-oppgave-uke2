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