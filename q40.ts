// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

type Album = {
    Artist: string,
    Title: string,
    Track?: number,
}

function make_album(artist: string, title: string, track?: number): Album {
    if (track){
        return {
            Artist: artist,
            Title: title,
            Track: track,
        };
    }

    else {
        return {
            Artist: artist,
            Title: title,
        };
    }
}

let dict1 = make_album('Taylor Swift', 'Lover');
console.log(dict1);

let dict2 = make_album('Dua Lipa', 'No rules');
console.log(dict2);

let dict3 = make_album('Lady Gaga', 'Bad Romance');
console.log(dict3);

let dict4 = make_album('Rehana', 'Diamond', 12);
console.log(dict4);