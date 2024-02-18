// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

let myFriend = ["Usama", "Aqeel", "Hamid"];

console.log(`Hello ${myFriend[0]}, would you like to join me at dinner tonight?`);
console.log(`Hello ${myFriend[1]}, would you like to join me at dinner tonight?`);
console.log(`Hello ${myFriend[2]}, would you like to join me at dinner tonight?`);

console.log(`\n${myFriend[2]} here, sorry I can't make it. I'm out of city!  \n`);

myFriend[2] = "Reza";

console.log(`Hello ${myFriend[0]}, the dinner will be at my place.`);
console.log(`Hello ${myFriend[1]}, the dinner will be at my place.`);
console.log(`Hello ${myFriend[2]}, would you like to join me at dinner tonight? It will be at my place.`);