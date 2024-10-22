console.log("Start of the Dice Roller!!");

/**
 * Example JSDoc Comment - Simple Dice Roller function
 * @param {number} [diceSize=6] 
 */
function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sided die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    // console.log(diceSide);
    return diceSide;
}

// Simple call, default parameter value used
rollDice();

// Overwriting the default parameter value
rollDice(diceSize=10);

// or
rollDice(20);


/**
 * Specific dice roller function that calls the simple function
 * Using Function Expression
 */
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();

// 
/**
 * Using Arrow Function / Unanonymous function to roll die of size 15
 * @returns the result of rolling the die
 */
const rollDice15 = () => {
    // return rollDice(15);
    // or
    result = rollDice(15);
    return result;
}

// rollDice15();

let diceSide15 = rollDice15();
console.log("The side you rolled in this 15-sided die is: " + diceSide15);

// If we want more functionality, then we use the {}, otherwise we can use the shortened version
/**
 * Using the Roll Dice function for 8 sided die
 * @returns Result of the 8-sided dice-roll
 */
const rollDice8 = () => rollDice(8);
console.log("The side you rolled for the 8-sided die is: " + rollDice8());


/**
 * 
 * @param {*} side 
 * @param {*} callback 
 * @returns the callback function that will be passed, ideally the rollDice() function
 */
function customDiceRoll(side, callback) {
    return callback(side); // rollDice(30);
}

result = customDiceRoll(30, rollDice);
console.log(result);

// Example of hoisting
rollMultipleDice(3, 6, (result) => console.log("Rolled: " + result));

// Function to roll multiple dice
function rollMultipleDice(numDice, diceSize, callback) {
    for (let i=0; i < numDice ; i++) {
        const result = rollDice(diceSize);
        callback(result);
    }
}