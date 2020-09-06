# Algorithm Explanations

- Some interesting algorithms and concepts I've encountered. 

1. **freeCodeCamp - Replace Loops using Recursion:**

   - **Code:**

     ```js
     //Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.
     
     function sum(arr, n) {
       if(n <= 0){
         return 0;
       } else {
         return sum(arr, n - 1) + arr[n - 1];
       }
     }
     
     ```

   - **Explanation:** (from Stack Overflow, by user ZER0 | https://stackoverflow.com/questions/61218154/using-recursion)

     Actually, with `n` equals to `1` is quite easy. Let's check step by step. Here your `sum` function; let's add some line to make it easier to refer:

     ```js
     1: function sum(arr, n) {
     2:  if(n <= 0){
     3:    return 0;
     4:  }else {
     5:    return sum(arr, n - 1) + arr[n - 1];
     6:  }
     7: }
     ```

     Now, let's see what's happening step by step when you execute:

     ```js
     sum([2, 3, 4], 1)
     ```

     The function `sum` is called with `arr` equals to `[2, 3, 4]`, and `n` equals to `1`.

     Since `n` is not less or equals than 0 (*line 2*), we go to the `else` block, at line `5`.

     Now, here is where the recursion happens: we call again the function `sum`, passing the same `arr`, but not the same `n`, instead we pass `n - 1`.

     So we call `sum` again, this time with `arr` equals to `[2, 3, 4]` but with `n` equals to `0`. Since `n` is `0` this time, at the *line 2* check we proceed to *line 3* and returns `0`.

     Now, the function exit, with the value `0`, that we gave to the caller.

     And the caller of `sum([2, 3, 4], 0)` was the execution `sum([2, 3, 4], 1)`, specifically at *line 5*:

     ```js
     5:    return sum(arr, n - 1) + arr[n - 1];
     ```

     Since it returned `0`, we can imaging like:

     ```js
     5:    return 0 + arr[n - 1];
     ```

     And remember that `n` is `1`, so:

     ```js
     5:    return 0 + arr[0];
     ```

     Since `arr[0]` is equals to `2`:

     ```js
     5:    return 0 + 2;
     ```

     And then why `sum([2, 3, 4], 1)` returns `2`.

     I'm not sure if it's clearer now, but I hope so. :)

2. **Generate Ranged Random Whole Numbers:**

   - **Code:**

     ```js
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
     ```

   - **Explanation:**
     - Since `Math.floor() = myMax + 1` returns a random value from 0 to `myMax`, we have to take note of the bottom range, which in our case is 5.
     - To ensure that the bottom range is reflected, we must add `myMin` (5) to the value. This makes sure that the final value will always be greater than `myMin` (5).
     - What we did is that we temporarily took `myMin` (5) from `myMax + 1` (10), so when we have to add `myMin` (5) at the end, it does not exceed `myMax` (10).