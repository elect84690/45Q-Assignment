// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ['AsadAli', 'AsadAli1', 'Asadali98', 'Asad_ali', 'Asad&Ali'];
let new_users = ['@sad@ali', 'AsadAli', 'Asad@li', 'Asad_Ali', 'Asadali1'];
let repetetion = false;
let newUserName = 'user_name';

for (let newUser of new_users){
    newUserName = newUser;
    newUserName = newUserName.toLowerCase();
    for (let currentUser of current_users){
        currentUser = currentUser.toLowerCase();
        if (currentUser == newUserName){
            repetetion = true;
            break;
        }
    }

    if (repetetion == true){
        console.log(`'${newUser}' is taken, plesae enter a new username.`);
        repetetion = false;
    }
    else {
        console.log(`'${newUser}' is availible.`);        
    }
}

