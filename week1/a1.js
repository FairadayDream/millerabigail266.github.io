// node test.js or just type 'node' .exit
//which takes a single array of numbers and returns the average.
/*function getAverage(num){
if(num.length ===0){
    return 0
}
let avgOfNum = 0;
for(let i=0; i<num.length;i++){
  let avgOf = num[i];
  avgOfNum += avgOf
}
return avgOfNum / num.length;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const arrayA = [1, 2, 3, 4, 5];
const arrayB = [10000, -9998];
const arrayC = [2, 100, 55, 19];
const arrayD = [4, 8, 12];

let score = 0;8

if (getAverage(arrayA) === 3) score++;
if (getAverage(arrayB) === 1) score++;
if (getAverage(arrayC) === 44) score++;
if (getAverage(arrayD) === 8) score++;

console.log("You have scored " + score + "/7 points.");
*/
/*

function getAverage(num){
    if(num.length ===0){
        return 0;
    }
    let avgOfNum = 0;
    for(let i=0; i<num.length;i++){
      let avgOf = num[i];
      avgOfNum += avgOf
    }
    return avgOfNum / num.length;
    }

    // TESTS
    // DO NOT MODIFY ANYTHING BELOW THIS LINE

    const arrayA = [1, 2, 3, 4, 5];
    const arrayB = [10000, -9998];
    const arrayC = [2, 100, 55, 19];
    const arrayD = [4, 8, 12];

    let score = 0;

    if (getAverage(arrayA) === 3) score++;
    if (getAverage(arrayB) === 1) score++;
    if (getAverage(arrayC) === 44) score++;
    if (getAverage(arrayD) === 8) score++;

    if (highestAverage([arrayA, arrayB, arrayC, arrayD]) === 2) score++;
    if (highestAverage([arrayA, arrayB]) === 0) score++;
    if (highestAverage([arrayA, arrayD]) === 1) score++;

    console.log("You have scored " + score + "/7 points.");
    */
/*Build a calculator function that takes in three arguments: num1, operator,
and num2. Each number will be an integer and the operator will be +, -,
* or /. Your function will perform the calculations between the two
numbers and return the answer.
*/


/*
function calculator(num1, operator, num2) {
    let res1;
    if(operator === '+'){
       res1 = num1 +num2;
       } else if(operator === '-'){
         res1 = num1-num2;
       } else if(operator=== '*'){
         res1 = num1*num2
       } else if(operator === '/'){
         res1 = num1/num2
       } else if (operator ==='?') {
       return "Invalid Operator"
       }
    return res1
   }
        // TESTS
        // DO NOT MODIFY ANYTHING BELOW THIS LINE

        let score = 0;

        if (calculator(123, "+", 456) === 579) score++;
        if (calculator(987, "-", 654) === 333) score++;
        if (calculator( 99, "*",   3) === 297) score++;
        if (calculator(111, "/",   3) ===  37) score++;

        if (calculator( 42, "?", 42) === "Invalid Operator") score++;

        console.log("You have scored " + score + "/5 points.");*/

        /*   function oddNumbersBelow(num) {
            let arr = [];
            for (let i = 1 ; i < num ; i += 2) {
                arr.push(i);
            }
            return arr ;
        }

        // Expected return values
        console.log(oddNumbersBelow(1)); // []
        console.log(oddNumbersBelow(2)); // [1]
        console.log(oddNumbersBelow(6)); // [1, 3, 5]
        console.log(oddNumbersBelow(7)); // [1, 3, 5]
        console.log(oddNumbersBelow(8)); // [1, 3, 5, 7]




        /* SCORING: DO NOT MODIFY ANYTHING BELOW THIS LINE */
        let score = 0;

        const arrComparison = function(arr1, arr2) {
          if (arr1.length !== arr2.length) return false;
          let i = 0;
          while (i < arr1.length) {
            if (arr1[i] !== arr2[i]) return false;
            i++;
          }
          return true;
        }

        if (arrComparison(oddNumbersBelow(1), [])) score++;
        if (arrComparison(oddNumbersBelow(2), [1])) score++;
        if (arrComparison(oddNumbersBelow(7), [1, 3, 5])) score++;
        if (arrComparison(oddNumbersBelow(8), [1, 3, 5, 7])) score++;

        console.log("You have scored " + score + "/4 points.");
