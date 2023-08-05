//week3-notes

//4. Helper function(s) - example:
// [If you need any helper function(s) for recursion, write simple explanations or examples here]

// 5. Data Input Transformation:
// [Explain how to transform the input data into a suitable format for recursion, e.g., splitting a string, converting to an array, etc.]

// 6. Output Variable Initialization:
// [Explain how to set up any necessary output variables for the recursive function, e.g., an array or a string]

// 7. Recursive Function:
function recursiveFunction(param1, param2, ...parms) {
    // 7.1 Base case(s)
    // [Explain the simple conditions that terminate the recursion, e.g., "if param1 is 0"]

    // 7.2 Recursive case(s)
    // [Explain the simple steps for the recursive calls and how to update the output variable accordingly]

    // Example of using a ternary operator for recursive call:
    const nextParam = someCondition ? param1 : param2;
    return recursiveFunction(nextParam);

    // 7.3 Return the final result
    return [final result];
  }

  // 8. Main Function (Optional):
  // [If applicable, write a simple wrapper function or main function that calls the recursive function]
 ///////////////////
function countdown(num){
  if (num === 0){
    return;
  }
  console.log(num);
  countdown(num - 1);
}

// Base Case - cant be recursed like conditionals eg num == 0; stops recursion loop.
// recursive case - num > 0

// recursive step - num - 1 (without this the system throughs a range error)

//common error troubleshooting : missing base case or an invalid recursive stack


function recursiveFunction(/* Parameters */) {
  // Base case(s) - when to stop recursion; it is followed by a return
    return;
  // [Add conditions that determine when the recursion should stop]

  // Recursive case(s) - what to do in each recursion step
  // [Add recursive calls and update the parameters]

  // Return the final result (if applicable)
  // [Add the base case return value or combine and return results from recursive calls]
}
// Example usage:
// const result = recursiveFunction(/* Arguments */);





// Base case: If the array has one or zero elements, it is considered sorted - if (arr.length <= 1) return true;

// Recursive case: Check if the first element is greater than the second element - if (arr[0] > arr[1]) return false;

// Proceed to the next recursive call with the rest of the array (excluding the first element) - return isSorted(arr.slice(1));}


//TARGET: WHAT ARE YOU CHECKING (ITERATING) FOR???? "checking if a num is = to 0" or
function myFunc(vara){
//Falsey statement - if()  //base;
return;
conditons compared usually neg  < > + * ** % -
return myFunc(vara.manipulated(1, n-1, +1 ))
}


var sum = function(array, i = 0) {
  // Take in an array
  // Base case =
  if (array.length === 0) return 0;
  let currNum = array[0];
  array.shift() // Recursive step
  return currNum + sum(array)
};


function myFunc(vara) {
  if (vara /* your base condition here */) {
    return /* result for the base case */;
  }

  // Recursive step: Perform your desired manipulations on vara here
  // Recursive case (the condition that triggers the function to call itself)

  // For example, you can use vara += 1 to increment vara by 1
  // or vara *= 2 to double the value of vara
  vara = vara + 1; // You can replace this line with your desired manipulation

  // Recursive call: Call myFunc with the manipulated vara
  // and return the result of the recursive call
  return myFunc(vara);
}

// The actionable takeaways from this lesson on recursion are:

// Recursion is the process of calling a function within itself.
// To implement recursion, we need to identify the base case (the condition that stops the recursion) and the recursive case (the condition that triggers the function to call itself).
// The base case is the situation where the function does not recurse and ends its execution.
// The recursive case is the situation where the function calls itself.
// When implementing recursion, we need to make sure that there is a base case to avoid infinite recursion.
// Recursive functions can be used to solve complex problems by breaking them down into simpler tasks.
// Understanding the problem space and identifying the base and recursive cases is essential before writing recursive code.
// In terms of code, an example of a recursive function is:

function determineRow(moviegoer) {
  if (moviegoer.personInFront) {
    return 1 + determineRow(moviegoer.personInFront);
  } else {
    return 1;
  }
}
// This function uses recursion to determine the row number of a person in a movie theater. If there is a person in front of the current moviegoer, the function calls itself with that person as the argument and adds 1 to the result. This process continues until there is no person in front, at which point the function returns 1.


function recursiveFunction(/* Parameters */) {
  // Base case: Specify the condition(s) where the recursion should stop
  // and a result should be returned directly.
  if (/* Base case condition */) {
    return /* Base case result */;
  }

  // Recursive step: Perform any necessary manipulations on the input parameters
  // to get them closer to the base case or the desired result.
  // This step is optional, depending on your use case.

  // Recursive call(s): Call the function recursively with updated parameters.
  // The function should be called one or more times within itself to solve smaller subproblems.
  // The recursive calls should be structured in a way that the base case will eventually be reached.
  // The results from recursive calls can be combined to get the final result.

  // For example:
  // let result1 = recursiveFunction(/* Updated parameters 1 */);
  // let result2 = recursiveFunction(/* Updated parameters 2 */);
  // return /* Combine results if needed */;
}


// The actionable takeaways from this lesson on default parameters are:
// - Default parameters can be used in function declarations to assign default values to parameters.
// - You can specify a default value for a parameter by using the `=` sign in the function signature.
// - If an argument is not provided for a parameter with a default value, the default value will be used.
// - Default parameters can be useful for allowing optional arguments in a function and avoid repetition of similar functions.
// - Default parameters can also be used to add flags to functions, allowing different behavior based on the provided arguments.
// - Default parameters can be used to pass data between recursive function calls, by using a default value as a storage mechanism for intermediate results.

//  function with default parameters:

function growNumber(num, amount = 1) {
  return num + amount;
}

growNumber(5); // 6
growNumber(5, 3); // 8

// In this example, the `amount` parameter has a default value of `1`.
// If the `amount` argument is not provided when calling the `growNumber` function, it will use the default value of `1`.

// Another example is a function that calculates the sum of a list of numbers and prints out intermediate sums if a verbose flag is set to `true`:

```javascript
function sum(nums, verbose = false) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (verbose) {
      console.log(total + " + " + nums[i] + " = " + (total + nums[i]));
    }
    total += nums[i];
  }
  return total;
}

let nums = [1, 2, 3, 4];
sum(nums); // 10
sum(nums, true);
// Output:
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10
```

// In this example, the `verbose` parameter has a default value of `false`. If the `verbose` argument is not provided when calling the `sum` function, it will use the default value of `false`, and no intermediate sums will be printed.
