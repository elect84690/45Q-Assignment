// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// lets consider the case of assignment question 20 about five languages

let fiveLanguages = ["English", "Spanish", "Urdu", "German", "French"];

// lets put a quotation on i in index of array notation

// for (let i = 0; i <= fiveLanguages.length; i++){
//     console.log(fiveLanguages["i"]);
// }

// now remove quotation on i in index of array notation

for (let i = 0; i < fiveLanguages.length; i++){
    console.log(fiveLanguages[i]);
}