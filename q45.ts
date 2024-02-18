// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

type Car = {
    manufacturer: string;
    model: string;
    color?: string;
    autopilot?: string;
    doors?: string;
    electric?: string;
};

function car(car: Car): {} {
    return car;
}

let new_car = car({manufacturer: 'BMW', model: '2005'});
console.log(new_car);

new_car = car({manufacturer: 'BMW', model: '2005', color: 'Black'});
console.log(new_car);

new_car = car({manufacturer: 'BMW', model: '2005', color: 'Black', autopilot: 'No'});
console.log(new_car);

new_car = car({manufacturer: 'BMW', model: '2005', color: 'Black', autopilot: 'No', electric: 'Yes'});
console.log(new_car);