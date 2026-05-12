//  Oppgave 1
const checkOddOrEven = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

console.log(checkOddOrEven(1));
console.log(checkOddOrEven(5));
console.log(checkOddOrEven(10));
console.log(checkOddOrEven(17));
console.log(checkOddOrEven(18));

// Oppgave 2

function exString1(text) {
  return text.toUpperCase() + "!";
}
console.log(exString1("hello"));
console.log(exString1("hope you are doing fine"));

const exString2 = (text) => text.toUpperCase() + "!";
console.log(exString2("this is a test for arrow function"));

// oppgave 3

const hils = (navn, time) => {
  if (time === undefined || time === null) {
    return "Feil ingen time verdi avgitt";
  }
  if (time < 0 || time > 23) {
    return "ugyldig tid";
  }
  if (time <= 5) return `God natt, ${navn}`;
  if (time <= 11) return `God morgen, ${navn}`;
  if (time <= 17) return `God dag, ${navn}`;
  if (time <= 23) return `God kveld, ${navn}`;
};

console.log(hils("Kurt", 19));

//  oppgave 4

function removeArrays(arr) {
  return arr.slice(1, -1);
}

console.log(removeArrays(["Rød", "Grønn", "Blå", "Gul"]));

// oppgave 5

function cleanString(string) {
  const cleanedString = string.replace("vanskelig", "gøy").trim()

  return cleanedString
}

console.log(cleanString("  Javascript er vanskelig   "));
console.log(cleanString(" Det er vanskelig å bruke metoder "));
console.log(cleanString(" vanskelig "));


// oppgave 6

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

items.shift();
console.log(items);

items.splice(items.indexOf("Viskelær"), 1, "Linjal");

console.log(items)

items.splice(items.indexOf("Penn"), 2, "Markeringspenn");

console.log(items)

const combined = items.join(" | ");

console.log(combined);
