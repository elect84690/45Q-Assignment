// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians = ['Robert', 'Tyler', 'Henry', 'Michelle', 'Danielle', 'Luke'];
let great_magicinas: string[] = [];

function show_magicians(magicians: string[]){
    for (let magician of magicians){
        console.log(magician);
    }
}

function make_great(magicians: string[]){
    for (let i = 0; i <magicians.length; i++){
        great_magicinas.push('Great ' + magicians[i]);
    }
}

show_magicians(magicians);

make_great(magicians);

show_magicians(great_magicinas);