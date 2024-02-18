//  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let name = "Asad Ali";

// to lower case

console.log(`Name in lower case: ${name.toLowerCase()}.`);

// to upper case

console.log(`Name in upper case: ${name.toUpperCase()}.`);

// to titlecase

let words = name.split(" ");
let nameTitleCase = "";

for (let i = 0; i < words.length; i++){
    nameTitleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
} 

console.log(`Name in title case: ${nameTitleCase}.`)