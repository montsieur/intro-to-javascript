// This is a basic JavaScript program that prints out some messages to the console

// We start by printing out a Hello World message to the console
console.log("Hello World!!");

// Next, we create a variable called x and assign the value 5 to it
// The variable is declared using the const keyword, which is a bit like a variable in other languages
// The const keyword means that the value of the variable cannot be changed after it is declared
// x = 5;

// var x = 5;

// let x = 5;

const x = 5;

// After that, we print out the value of x to the console
console.log(x);

// Then, we create an array of strings called fruits
// The array contains the three elements "apple", "banana", and "mango"
let fruits = [
    "apple",
    "banana",
    "mango"
];

// We then use the forEach() method to loop through the elements of the array
// The callback function passed to the forEach() method is executed for each element in the array
// The callback function takes an argument, which is the value of the current element in the array
// We use an arrow function to define the callback function
// The arrow function takes the value of the current element and prints it out to the console in uppercase
// The toLocaleUpperCase() method is used to convert the string to uppercase
fruits.forEach(fruit => {
    console.log(fruit.toLocaleUpperCase());
});

// After that, we print out the fruits array to the console
console.log(fruits);

// Next, we use the map() method to create a new array from the fruits array
// The map() method takes a callback function as an argument
// The callback function is executed for each element in the array
// The callback function takes an argument, which is the value of the current element in the array
// We use an arrow function to define the callback function
// The arrow function takes the value of the current element and returns a new value
// The new value is the original value converted to uppercase using the toLocaleUpperCase() method
// The map() method returns a new array containing the results of the callback function for each element in the array
mapTest = fruits.map((fruit) => {
    return fruit.toLocaleUpperCase();
});

// Finally, we print out the mapTest array to the console
console.log(mapTest);

// Objects 

let person1 = {
    name: "Rick",
    age: 90,
    city: "Tasmania",
    greetingMessage: function() { // function expression
        // This is a method that prints out a greeting message
        // The this keyword here refers to the person1 object
        // The first console.log is just a fun message
        console.log("Pickle Rickkkk");
        // The second console.log prints out a greeting message
        // that includes the person's name
        console.log("Hi, My name is " + this.name +"!");
    }
};

console.log(person1.name);
// Log the value of the 'age' property of the person1 object to the console
console.log(person1.age);

// Log the value of the 'city' property of the person1 object to the console
console.log(person1.city);

// Call the 'greetingMessage' method of the person1 object and log the result to the console
// The 'greetingMessage' method is a function expression that prints out a greeting message to the console
// The message includes the person's name, which is accessed using the 'this' keyword
// The 'this' keyword here refers to the person1 object
console.log(person1.greetingMessage());
console.log(person1.greetingMessage())

let person2 = {
    name: "Morty",
    age: 12,
    city: "Sydney",
    greetingMessage: () => { // arrow function expression
        console.log("Hi, My name is " + this.name +"!");
        console.log(`Hi, My name is ${this.name} !`);
    }
};

// Access and log the 'name' property of the person2 object
console.log(person2["name"]);

// Access and log the 'age' property of the person2 object
console.log(person2.age);

// Access and log the 'city' property of the person2 object
console.log(person2.city);

// Call the greetingMessage method of the person2 object and log the result
console.log(person2.greetingMessage());

// Functions
/**
 * This function calculates the area of a rectangle based on the length and width provided as arguments
 * @param {number} length The length of the rectangle
 * @param {number} width The width of the rectangle
 * @returns {number} The calculated area of the rectangle
 */

/**
 * This function calculates the area of a rectangle based on the length and width provided as arguments
 * @param {number} length The length of the rectangle
 * @param {number} width The width of the rectangle
 * @returns {number} The calculated area of the rectangle
 */
function calculateArea(length, width) {
    // Multiply the length and width of the rectangle to calculate the area
    return length * width;
}

let area = calculateArea(5,3);
console.log(area);

/**
 * A function that takes a name as an argument and logs out a greeting message to the console
 * @param {string} name The name of the person to be greeted
 */
function greet(name) {
    // Logs a greeting message to the console
    // The message is a concatenation of the string "Hello, " and the name provided as an argument
    console.log("Hello, " + name + "!");
}


let person3 = {
    name: "Janice",
    age: 23,
    city: "Melbourne",
    // This is a function property, that takes a name as an argument and logs out a greeting message to the console
    greetingMessage: greet
};

// Access and log the value of the 'name' property of the person3 object
//          object.propertyValue
console.log(person3.name);

// Call the 'greetingMessage' method of the person3 object and log the result
// The 'greetingMessage' method takes the value of the 'name' property of the person3 object as an argument
//          object.propertyFunction
console.log(person3.greetingMessage(person3.name));

// This is the global object, which is the window object in the browser
console.log(this);

let person4 = {
    name: "Alice",
    age: 25,
    city: "Sydney",
    // This is a function property, that takes a name as an argument and logs out a greeting message to the console
    greetingMessage: greet,
    // This is a nested object, which is an object that is a property of another object
    contact: {
        // This is a property of the nested object, which is a string
        tel: "0244444",
        // This is a property of the nested object, which is a string
        mobile: "04444444",
        // This is a method of the nested object, which takes no arguments and logs out a message to the console
        voicemailMessage: function() {
            console.log("This message is from a nested object.");
        } 
    }
};

// Access and log the value of the 'tel' property of the nested object
console.log(person4["contact"]["tel"]);
// Access and log the value of the 'mobile' property of the nested object
console.log(person4.contact.mobile);

// Call the 'voicemailMessage' method of the nested object and log the result
console.log(person4.contact.voicemailMessage());

// This will print out the property names of the person4 object as an array
console.log(Object.keys(person4));
// This will print out the property names of the nested object as an array
console.log(Object.keys(person4.contact))
