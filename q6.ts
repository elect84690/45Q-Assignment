// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let name = "Ali Reza";
console.log(name);

let newName = "\t" + name + "\n";
console.log(newName);
console.log(newName.trim());

newName = "\t" + name;
console.log(newName);
console.log(newName.trim());

newName = name + "\n";
console.log(newName);
console.log(newName.trim());