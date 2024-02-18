// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

// Q17 onwards

// 17a
console.log(`\nHello ${myFriend.pop()}, sorry, due to personal reasons I need to cancel our dinner tonight. Talk to you later!`);
console.log(`Hello ${myFriend.pop()}, sorry, due to personal reasons I need to cancel our dinner tonight. Talk to you later!`);
console.log(`Hello ${myFriend.pop()}, sorry, due to personal reasons I need to cancel our dinner tonight. Talk to you later!`);
console.log(`Hello ${myFriend.pop()}, sorry, due to personal reasons I need to cancel our dinner tonight. Talk to you later!`);

// 17b
console.log(`\nHello ${myFriend[0]}, unfortunately the delivery is delayed till day after tomorrow!`);
console.log(`Hello ${myFriend[1]}, unfortunately the delivery is delayed till day after tomorrow!`);

// 17c
myFriend.pop();
myFriend.pop();

console.log(`\nWelcome! ${myFriend}\nWhose party is this? Mine.`);