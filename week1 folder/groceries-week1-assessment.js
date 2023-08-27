function costOfGroceries(groceries) { //defines the function
    let total = 0; //set total to 0

    for(let i = 0; i < groceries.length; i++){ //iterates through the groceries variable
      if(groceries[i] === 'cheese'){ //uses [i] of groceries to reference groceriesA, grocerciesB et.al; uses the if statement to hard equate groceries to the string 'cheese'.
       total += 5; //adds(+5) and subjects it to the total via =
      }
      if(groceries[i] === 'butter'){ //''
       total += 1;//''
      }
      if(groceries[i] === 'eggs'){ //''
        total += 2;//''
      }
      if(groceries[i] === 'milk'){//''
        total += 3;//''
      }
      if(groceries[i] === 'bread'){//''
        total += 4;//''
      } else if(groceries[i] === ''){//' says else if the array of groceries equals an empty string then return 0
        return 0;
      }
    }
      return total; //return total
}

function mostExpensiveGroceries(groceriesList) { // Creates a new function 'mostExpensiveGroceries' and calls groceriesList
    let highestIndex = 0; //assigns a new variable called highestIndex
    let currentHighestCost = costOfGroceries(groceriesList[0]);// assigns new var and equates to the previous function's name and inputs the new functions call while adding an index[0]
    for(let i = 1; i < groceriesList.length; i++){ //starts for loop w i=1 iterate through the call.length, at interval of 1.a
      let cost = costOfGroceries(groceriesList[i]); //assigns new var,equates to old function, Uses new functions call at an index of i this time referencing the groceriesA/B/C/D
      if (cost > currentHighestCost) // creates a conditional if statement saying if cost is greater than currentHighestCost of the iteration
      //then the highestIndex must be i of current iteration.
        highestIndex = i;
        currentHighestCost = cost; //a clarifying statement currentHighestCost = cost
    }
    return highestIndex; //returns the highestIndex otherwise known as the selected interation that conforms to

// DO NOT MODIFY ANYTHING BELOW THIS LINE
const groceriesA = ['cheese', 'butter', 'eggs'];
const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
const groceriesC = ['cheese', 'bread'];
const groceriesD = ['eggs', 'butter'];

costOfGroceries(groceriesA);  // 8
costOfGroceries(groceriesB);  // 13  3
costOfGroceries(groceriesC);  // 9
costOfGroceries(groceriesD);  // 3

mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");
