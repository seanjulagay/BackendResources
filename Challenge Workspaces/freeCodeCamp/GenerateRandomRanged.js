/*

Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

*/

function randomRange(myMin, myMax) {
    // Only change code below this line
    
    var myRandom = Math.random();
    var myNumber = Math.floor(myRandom * ((myMax + 1) - myMin) + myMin);
    console.log(myNumber);
    return myNumber;
    // Only change code above this line
}

randomRange(5, 10);