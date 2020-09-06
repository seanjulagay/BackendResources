/*

Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.

*/

function convertToInteger(str) {
    var myInt = parseInt(str, 2);
    console.log(myInt);
    return myInt;
}

convertToInteger("10011");
