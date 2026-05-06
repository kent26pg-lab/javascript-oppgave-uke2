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

// oppgave 3

const hils = (navn, time) => {
    if (time === undefined  || time === null) {
    return "Feil ingen time verdi avgitt";
     }
     if (time < 0 || time > 23 ) {
        return "ugyldig tid"
         }
        if (time <= 5)  return `God natt, ${navn}`;
         if (time <= 11) return `God morgen, ${navn}`;
         if (time <= 17) return `God dag, ${navn}`;
         if (time <= 23) return `God kveld, ${navn}`;
     };
 
     console.log(hils("Kurt", 18));

    //  oppgave 4
    