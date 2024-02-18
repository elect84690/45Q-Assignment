// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// 18a
let toBeVisitCity = ["Paris", "London", "New York", "Geneva", "Reykjavik"];

// 18b
console.log("\nOriginal array:");
console.log(toBeVisitCity);

// 18c
console.log("\nNew sorted array without modifying the original array:");
console.log([...toBeVisitCity].sort());

// 18d
console.log("\nOriginal array is in original order:");
console.log(toBeVisitCity);

// 18e
console.log("\nNew sorted array in reverse without modifying the original array:");
console.log(([...toBeVisitCity].sort()).reverse());

// 18f
console.log("\nOriginal array is in original order:");
console.log(toBeVisitCity);

// 18g
console.log("\nOriginal array is modified to new reverse order:");
console.log(toBeVisitCity.reverse());

// 18h
console.log("\nOriginal array is modified in reverse again to get original order:");
console.log(toBeVisitCity.reverse());

//  18i
console.log("\nOriginal array is in alphabatical order:");
console.log(toBeVisitCity.sort());

//  18j
console.log("\nOriginal array is in reverse alphabatical order:");
console.log(toBeVisitCity.sort().reverse());