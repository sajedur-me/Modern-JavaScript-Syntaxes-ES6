// for loop, for in & for of 

for(let i=0; i<=5; i++) {
    console.log(i);
}

// for in loop is used to iterate over the properties of an object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person) {
    console.log(key + ": " + person[key]);
}

// for of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.)
const numbers = [1, 2, 3];
for(let i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
for(let number of numbers) {
    console.log(number);
}

// for in loop iterates over the keys of an object, while for of loop iterates over the values of an iterable object. In the case of a string, for of will give you each character, while for in will give you the index of each character.
const myString = "Hello";
for(let element of myString) {
    console.log(element);
}
for(let element in myString) {
    console.log(element);
}


