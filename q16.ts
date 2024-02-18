// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let myFriend = ["Usama", "Aqeel", "Hamid"];

console.log(`Hello ${myFriend[0]}, would you like to join me at dinner tonight?`);
console.log(`Hello ${myFriend[1]}, would you like to join me at dinner tonight?`);
console.log(`Hello ${myFriend[2]}, would you like to join me at dinner tonight?`);

console.log(`\n${myFriend[2]} here, sorry I can't make it. I'm out of city!  \n`);

myFriend[2] = "Reza";

console.log(`Hello ${myFriend[0]}, the dinner will be at my place.`);
console.log(`Hello ${myFriend[1]}, the dinner will be at my place.`);
console.log(`Hello ${myFriend[2]}, would you like to join me at dinner tonight? It will be at my place.`);

console.log(`\nHurray! my new table will be delivered today so let's invite some more friends.\n`);

myFriend.unshift("Ajmal");
myFriend.push("Ammar");
myFriend.splice(2, 0, "Ali");

console.log(myFriend);

console.log(`\nHello ${myFriend[0]}, please join me at dinner at my place today by 7:00 PM!`);
console.log(`Hello ${myFriend[1]}, see you at 7:00 PM sharp!`);
console.log(`Hello ${myFriend[2]}, please join me at dinner at my place today by 7:00 PM!`);
console.log(`Hello ${myFriend[3]}, see you at 7:00 PM sharp!`);
console.log(`Hello ${myFriend[4]}, see you at 7:00 PM sharp!`);
console.log(`Hello ${myFriend[5]}, please join me at dinner at my place today by 7:00 PM!`);

export {myFriend};