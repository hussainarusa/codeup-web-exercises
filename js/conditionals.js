"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
     function analyzeColor (color){
         if (color == "blue"){
             console.log(`Blue is the color of the sky`)
         }else if (color == "red") {
             console.log(`Red is the color of roses`)
         } else if (color == "pink"){
             console.log(`Pink is the color of Kirby`)
         } else {
             console.log(`sorry i dont know that color yet!`)
        }
    }
        analyzeColor("orange");


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
    console.log(`The random color is ${randomColor}`)
    analyzeColor(randomColor);


/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
 //
     let analyzeColor = randomColor;
        switch (analyzeColor){
            case "blue":
                console.log(`Blue is the color of the sky`);
                break;
            case "red":
                console.log("Red is the color of roses");
                break;
            case "pink":
                console.log("Pink is the color of kirby!");
                break;
            default:
                alert("im sorry i dont know that color yet!")

        }


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

    let analyzeColor = prompt (`type a color`)
    switch (analyzeColor){
        case "blue":
            alert(`Blue is the color of the sky`);
            break;
        case "red":
            alert("Red is the color of roses");
            break;
        case "pink":
            alert("Pink is the color of kirby!");
            break;
        default:
            alert("im sorry i dont know that color yet!")

    }

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


 let luckyNumber = Math.floor((Math.random() * 5) + 0);

    function calculateTotal(luckyNumber, totalAmount) {
        switch (luckyNumber) {
            case 0:
                return totalAmount; // No discount
            case 1:
                return totalAmount * 0.9; // 10% discount
            case 2:
                return totalAmount * 0.75; // 25% discount
            case 3:
                return totalAmount * 0.65; // 35% discount
            case 4:
                return totalAmount * 0.5; // 50% discount
            case 5:
                return 0; // Everything for free
            default:
                return totalAmount; // No discount for unknown lucky numbers
        }
    }

    console.log(`Your lucky number is ${luckyNumber}` )
    console.log(`Your new discounted total is: ${calculateTotal(luckyNumber, 100)}`);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);
    function calculateTotal(luckyNumber, totalAmount) {

        alert(`Your total before the discount: ` + totalAmount.toFixed(2))

        switch (luckyNumber) {
            case 0:
                return totalAmount; // No discount
            case 1:
                return totalAmount * 0.9; // 10% discount
            case 2:
                return totalAmount * 0.75; // 25% discount
            case 3:
                return totalAmount * 0.65; // 35% discount
            case 4:
                return totalAmount * 0.5; // 50% discount
            case 5:
                return 0; // Everything for free
            default:
                return totalAmount; // No discount for unknown lucky numbers

        }
    }

    console.log(`Your lucky number is ${luckyNumber}` )
    console.log(`Your new discounted total is: ${calculateTotal(luckyNumber, 100)}`)


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//

    const userWantsToEnterNumber = confirm("Would you like to enter a number?");

    if (userWantsToEnterNumber) {
        let userInput = prompt("Enter a number");

        if (isNaN(userInput)) {
            console.log("Invalid input. Please enter a valid number.");
        } else {
            userInput = Number(userInput);

            if (userInput % 2 === 0) {
                console.log(`${userInput} is even`);
            } else {
                console.log(`${userInput} is odd`);
            }

            if (userInput > 0) {
                console.log(`This number is positive`);
                console.log(userInput + 100);
            }

            if (userInput < 0) {
                console.log(`This number is negative`);
                console.log(userInput + 100);
            }
        }
    }











