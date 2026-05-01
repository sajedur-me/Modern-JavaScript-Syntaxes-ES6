
// Destructuring Assignment


// Example 1: Object Destructuring
const person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com'
};

// Destructuring the 'name' property from the 'person' object
const { name } = person;
console.log(name); // Output: John Doe

// Aliasing the 'age' property to a new variable name 'old'
const { age: old } = person;
console.log(old); // Output: 30


// Nested Object Destructuring
const user = {
  username: 'johndoe',
  profile: {
    firstName: 'John',
    lastName: 'Doe'
  }
};

// Destructuring nested properties
const { profile: { firstName, lastName } } = user;
console.log(firstName); // Output: John
console.log(lastName); // Output: Doe



// Missing Properties and Default Values
const subjects = {
    name: 'Mathematics',
    // details: {
    //     teacher: 'Mr. Smith',
    //     room: '101'
    // }
}

const { details: { teacher, room } = {} } = subjects;
console.log(teacher); // Output: Mr. Smith
console.log(room); // Output: 101




// Example 2: Array Destructuring
const numbers = [1, 2, 3, 4, 5];

// Destructuring the first two elements of the array
const [first, second] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2

// Skipping elements in array destructuring
const [ , , third] = numbers;
console.log(third); // Output: 3

// Default values in array destructuring
const [a, b, c = 10] = [5, 6];
console.log(a); // Output: 5
console.log(b); // Output: 6
console.log(c); // Output: 10



// Nested Array Destructuring
const nestedArray = [1, [2, 3], 4];
const [x, [y, z], w] = nestedArray;
console.log(x); // Output: 1
console.log(y); // Output: 2
console.log(z); // Output: 3
console.log(w); // Output: 4




// Example 3: Function Parameter Destructuring
function greet({ name, age }) {
  console.log(`Hello, my name is ${name} and I am ${age} years old.`);
}

greet({ name: 'Alice', age: 25 }); // Output: Hello, my name is Alice and I am 25 years old.



// Example 4: Destructuring in Loops
const people = [
  { name: 'Bob', age: 28 },
  { name: 'Charlie', age: 32 }
];

for (const { name, age } of people) {
  console.log(`${name} is ${age} years old.`);
}


