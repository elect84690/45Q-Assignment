// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians = ['Robert', 'Tyler', 'Henry', 'Michelle', 'Danielle', 'Luke'];

function show_magicians(magicians: string[]){
    for (let magician of magicians){
        console.log(magician);
    }
}

show_magicians(magicians);