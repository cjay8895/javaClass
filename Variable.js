// Declare a variable

// let num1 = 10;
// let num2 = 3;

// // Perform operations and store results
// let addition = num1 + num2;
// let subtraction = num1-num2;
// let multiplication = num1*num2;
// let division = num1/num2;
// let modulus = num1%num2;

// //print results
// console.log ("Addition:" + num1 + "+" + num2 + "-" + addition);
// console.log ("Subtraction:" + num1 + "-" + num2 + "-" + subtraction);
// console.log ("Multiplication:" + num1 + "*" + num2 + "-" + multiplication);
// console.log ("Division:" + num1 + "/" + num2 + "-" + division);
// console.log ("Modulus:" + num1 + "%" + num2 + "-" + modulus);

// function to perform arithmetic operation
function calculateOperation(num1, num2) {
    let addition = num1 + num2;
    let subtraction = num1-num2;
    let multiplication = num1*num2;
    let division = num1/num2;
    let modulus = num1%num2;

    // Print the result
    console.log ("Addition:" + num1 + "+" + num2 + "-" + addition);
    console.log ("Subtraction:" + num1 + "-" + num2 + "-" + subtraction);
    console.log ("Multiplication:" + num1 + "*" + num2 + "-" + multiplication);
    console.log ("Division:" + num1 + "/" + num2 + "-" + division);
    console.log ("Modulus:" + num1 + "%" + num2 + "-" + modulus);
}

calculateOperation(3, 2);