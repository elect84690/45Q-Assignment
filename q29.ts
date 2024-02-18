// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make an array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['apple', 'banana', 'kiwi', 'mango', 'orange'];

if (favorite_fruits.includes("apple")){
    console.log("You like apples.");
}

if (favorite_fruits.includes("banana")){
    console.log("You like bananas.");
}

if (favorite_fruits.includes("kiwi")){
    console.log("You like kiwis.");
}

if (favorite_fruits.includes("mango")){
    console.log("You like mangoes.");
}

if (favorite_fruits.includes("orange")){
    console.log("You like oranges.");
}